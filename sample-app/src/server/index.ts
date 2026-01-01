import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { AllscreenshotsClient, AllscreenshotsError } from '@allscreenshots/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../dist')));
}

// Initialize client
let client: AllscreenshotsClient | null = null;

try {
  client = new AllscreenshotsClient();
} catch {
  console.warn('ALLSCREENSHOTS_API_KEY not set. API calls will fail.');
}

interface ScreenshotRequestBody {
  url: string;
  device: string;
  fullPage: boolean;
}

app.post('/api/screenshot', async (req, res) => {
  if (!client) {
    res.status(500).json({
      error: 'API key not configured. Set ALLSCREENSHOTS_API_KEY environment variable.',
    });
    return;
  }

  const { url, device, fullPage } = req.body as ScreenshotRequestBody;

  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return;
  }

  try {
    const startTime = Date.now();
    const imageBuffer = await client.screenshot({
      url,
      device: device || 'Desktop HD',
      fullPage: fullPage || false,
      format: 'png',
    });
    const elapsed = Date.now() - startTime;

    const base64Image = imageBuffer.toString('base64');

    res.json({
      success: true,
      image: `data:image/png;base64,${base64Image}`,
      elapsed,
    });
  } catch (error) {
    console.error('Screenshot error:', error);

    if (error instanceof AllscreenshotsError) {
      res.status(error.statusCode || 500).json({
        error: error.message,
        errorCode: error.errorCode,
      });
      return;
    }

    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    apiKeyConfigured: !!client,
  });
});

// Serve React app for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  if (!client) {
    console.warn('Warning: ALLSCREENSHOTS_API_KEY not set');
  }
});
