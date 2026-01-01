import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface ScreenshotResult {
  image: string;
  elapsed: number;
}

const DEVICES = [
  { value: 'Desktop HD', label: 'Desktop HD' },
  { value: 'iPhone 14', label: 'iPhone 14' },
  { value: 'iPad', label: 'iPad' },
];

function App() {
  const [url, setUrl] = useState('https://github.com');
  const [device, setDevice] = useState('Desktop HD');
  const [fullPage, setFullPage] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [result, setResult] = useState<ScreenshotResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setError('Please enter a URL');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/screenshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url.trim(),
          device,
          fullPage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to capture screenshot');
      }

      setResult({
        image: data.image,
        elapsed: data.elapsed,
      });
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setStatus('error');
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Allscreenshots demo</h1>
      </header>

      <main>
        <form className="controls" onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              className="url-input"
              placeholder="https://github.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              className="capture-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Capturing...' : 'Take screenshot'}
            </button>
          </div>

          <div className="options-row">
            <div className="option-group">
              <label htmlFor="device">Device</label>
              <select
                id="device"
                className="device-select"
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                disabled={status === 'loading'}
              >
                {DEVICES.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={fullPage}
                onChange={(e) => setFullPage(e.target.checked)}
                disabled={status === 'loading'}
              />
              Full page
            </label>
          </div>
        </form>

        <section className="result-section">
          <div className="result-header">
            <h2>Result</h2>
            {result && (
              <span className="result-meta">
                Captured in {(result.elapsed / 1000).toFixed(2)}s
              </span>
            )}
          </div>

          <div className="result-content">
            {status === 'idle' && (
              <p className="placeholder">
                Enter a URL and click "Take screenshot" to capture
              </p>
            )}

            {status === 'loading' && (
              <div className="loading">
                <div className="spinner" />
                <p className="loading-text">Capturing screenshot...</p>
              </div>
            )}

            {status === 'error' && error && (
              <div className="error">{error}</div>
            )}

            {status === 'success' && result && (
              <div className="screenshot-container">
                <img
                  src={result.image}
                  alt="Screenshot"
                  className="screenshot"
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
