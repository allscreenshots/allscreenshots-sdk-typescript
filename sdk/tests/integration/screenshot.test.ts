import { describe, it, expect, beforeAll } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { AllscreenshotsClient } from '../../src/index.js';

/**
 * Integration tests for the Allscreenshots SDK
 *
 * These tests require the ALLSCREENSHOTS_API_KEY environment variable to be set.
 * They will be skipped if the API key is not available.
 */

interface TestResult {
  testId: string;
  testName: string;
  url: string;
  device: string;
  fullPage: boolean;
  passed: boolean;
  errorMessage?: string;
  imageBase64?: string;
  executionTimeMs: number;
}

const testResults: TestResult[] = [];
let client: AllscreenshotsClient | null = null;
const apiKey = process.env.ALLSCREENSHOTS_API_KEY;

beforeAll(() => {
  if (apiKey) {
    client = new AllscreenshotsClient({ apiKey });
  }
});

const runTest = async (
  testId: string,
  testName: string,
  url: string,
  device: string,
  fullPage: boolean,
  expectSuccess: boolean
): Promise<void> => {
  const startTime = Date.now();

  if (!client) {
    testResults.push({
      testId,
      testName,
      url,
      device,
      fullPage,
      passed: false,
      errorMessage: 'API key not configured',
      executionTimeMs: 0,
    });
    return;
  }

  try {
    const imageBuffer = await client.screenshot({ url, device, fullPage });
    const executionTimeMs = Date.now() - startTime;

    if (expectSuccess) {
      testResults.push({
        testId,
        testName,
        url,
        device,
        fullPage,
        passed: true,
        imageBase64: imageBuffer.toString('base64'),
        executionTimeMs,
      });
    } else {
      testResults.push({
        testId,
        testName,
        url,
        device,
        fullPage,
        passed: false,
        errorMessage: 'Expected error but received success',
        executionTimeMs,
      });
    }
  } catch (error) {
    const executionTimeMs = Date.now() - startTime;

    if (!expectSuccess) {
      testResults.push({
        testId,
        testName,
        url,
        device,
        fullPage,
        passed: true,
        errorMessage: error instanceof Error ? error.message : String(error),
        executionTimeMs,
      });
    } else {
      testResults.push({
        testId,
        testName,
        url,
        device,
        fullPage,
        passed: false,
        errorMessage: error instanceof Error ? error.message : String(error),
        executionTimeMs,
      });
    }
  }
};

describe.skipIf(!apiKey)('integration tests', () => {
  it('IT-001: Basic Desktop Screenshot', async () => {
    await runTest('IT-001', 'Basic Desktop Screenshot', 'https://github.com', 'Desktop HD', false, true);
    const result = testResults.find(r => r.testId === 'IT-001');
    expect(result?.passed).toBe(true);
    if (result?.imageBase64) {
      expect(result.imageBase64.length).toBeGreaterThan(0);
    }
  }, 120000);

  it('IT-002: Basic Mobile Screenshot', async () => {
    await runTest('IT-002', 'Basic Mobile Screenshot', 'https://github.com', 'iPhone 14', false, true);
    const result = testResults.find(r => r.testId === 'IT-002');
    expect(result?.passed).toBe(true);
  }, 120000);

  it('IT-003: Basic Tablet Screenshot', async () => {
    await runTest('IT-003', 'Basic Tablet Screenshot', 'https://github.com', 'iPad', false, true);
    const result = testResults.find(r => r.testId === 'IT-003');
    expect(result?.passed).toBe(true);
  }, 120000);

  it('IT-004: Full Page Desktop', async () => {
    await runTest('IT-004', 'Full Page Desktop', 'https://github.com', 'Desktop HD', true, true);
    const result = testResults.find(r => r.testId === 'IT-004');
    expect(result?.passed).toBe(true);
  }, 120000);

  it('IT-005: Full Page Mobile', async () => {
    await runTest('IT-005', 'Full Page Mobile', 'https://github.com', 'iPhone 14', true, true);
    const result = testResults.find(r => r.testId === 'IT-005');
    expect(result?.passed).toBe(true);
  }, 120000);

  it('IT-006: Complex Page', async () => {
    await runTest('IT-006', 'Complex Page', 'https://github.com/anthropics/claude-code', 'Desktop HD', false, true);
    const result = testResults.find(r => r.testId === 'IT-006');
    expect(result?.passed).toBe(true);
  }, 120000);

  it('IT-007: Invalid URL', async () => {
    await runTest('IT-007', 'Invalid URL', 'not-a-valid-url', 'Desktop HD', false, false);
    const result = testResults.find(r => r.testId === 'IT-007');
    expect(result?.passed).toBe(true); // Passed means error was handled correctly
  }, 60000);

  it('IT-008: Unreachable URL', async () => {
    await runTest('IT-008', 'Unreachable URL', 'https://this-domain-does-not-exist-12345.com', 'Desktop HD', false, false);
    const result = testResults.find(r => r.testId === 'IT-008');
    expect(result?.passed).toBe(true); // Passed means error was handled correctly
  }, 120000);
});

// Generate HTML report after all tests
describe.skipIf(!apiKey)('generate test report', () => {
  it('should generate HTML report', () => {
    const totalTests = testResults.length;
    const passedTests = testResults.filter(r => r.passed).length;
    const failedTests = totalTests - passedTests;
    const totalTime = testResults.reduce((sum, r) => sum + r.executionTimeMs, 0);

    const html = generateHtmlReport(testResults, {
      sdkName: '@allscreenshots/sdk',
      language: 'TypeScript',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      totalTests,
      passedTests,
      failedTests,
      totalTimeMs: totalTime,
      osInfo: `${os.platform()} ${os.release()}`,
      runtimeVersion: process.version,
    });

    const reportPath = path.join(__dirname, '..', '..', 'test-report.html');
    fs.writeFileSync(reportPath, html);

    expect(fs.existsSync(reportPath)).toBe(true);
  });
});

interface ReportMetadata {
  sdkName: string;
  language: string;
  version: string;
  timestamp: string;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  totalTimeMs: number;
  osInfo: string;
  runtimeVersion: string;
}

function generateHtmlReport(results: TestResult[], metadata: ReportMetadata): string {
  const passRate = metadata.totalTests > 0 ? (metadata.passedTests / metadata.totalTests * 100).toFixed(1) : '0';

  const testRows = results.map(result => {
    const statusBadge = result.passed
      ? '<span class="badge pass">PASS</span>'
      : '<span class="badge fail">FAIL</span>';

    const imageHtml = result.imageBase64
      ? `<img src="data:image/png;base64,${result.imageBase64}" alt="Screenshot" class="screenshot" />`
      : '<span class="no-image">No image</span>';

    const errorHtml = result.errorMessage
      ? `<div class="error-message">${escapeHtml(result.errorMessage)}</div>`
      : '';

    return `
      <tr>
        <td>${escapeHtml(result.testId)}</td>
        <td>${escapeHtml(result.testName)}</td>
        <td class="url">${escapeHtml(result.url)}</td>
        <td>${escapeHtml(result.device)}</td>
        <td>${result.fullPage ? 'Yes' : 'No'}</td>
        <td>${statusBadge}</td>
        <td>${result.executionTimeMs}ms</td>
        <td class="result-cell">
          ${imageHtml}
          ${errorHtml}
        </td>
      </tr>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Allscreenshots SDK integration test report</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: #f5f5f5;
      color: #333;
      line-height: 1.6;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      background: #1a1a2e;
      color: white;
      padding: 30px 20px;
      margin-bottom: 30px;
    }

    header h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .meta-info {
      display: flex;
      gap: 20px;
      font-size: 14px;
      opacity: 0.8;
    }

    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .summary-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .summary-card h3 {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }

    .summary-card .value {
      font-size: 32px;
      font-weight: 700;
    }

    .summary-card .value.pass { color: #22c55e; }
    .summary-card .value.fail { color: #ef4444; }
    .summary-card .value.neutral { color: #333; }

    table {
      width: 100%;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      border-collapse: collapse;
    }

    th, td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #eee;
    }

    th {
      background: #f8f9fa;
      font-weight: 600;
      font-size: 13px;
      color: #555;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    td {
      font-size: 14px;
    }

    td.url {
      max-width: 300px;
      word-break: break-all;
    }

    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }

    .badge.pass {
      background: #dcfce7;
      color: #166534;
    }

    .badge.fail {
      background: #fee2e2;
      color: #991b1b;
    }

    .screenshot {
      max-width: 200px;
      max-height: 150px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    .no-image {
      color: #999;
      font-style: italic;
    }

    .error-message {
      margin-top: 8px;
      padding: 8px;
      background: #fee2e2;
      border-radius: 4px;
      font-size: 12px;
      color: #991b1b;
      max-width: 300px;
      word-break: break-word;
    }

    .result-cell {
      min-width: 220px;
    }

    footer {
      margin-top: 30px;
      padding: 20px;
      text-align: center;
      font-size: 13px;
      color: #666;
    }

    footer .env-info {
      margin-top: 8px;
      font-size: 12px;
      opacity: 0.7;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <h1>Allscreenshots SDK integration test report</h1>
      <div class="meta-info">
        <span>${escapeHtml(metadata.sdkName)}</span>
        <span>${escapeHtml(metadata.language)}</span>
        <span>v${escapeHtml(metadata.version)}</span>
        <span>${escapeHtml(metadata.timestamp)}</span>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="summary">
      <div class="summary-card">
        <h3>Total tests</h3>
        <div class="value neutral">${metadata.totalTests}</div>
      </div>
      <div class="summary-card">
        <h3>Passed</h3>
        <div class="value pass">${metadata.passedTests}</div>
      </div>
      <div class="summary-card">
        <h3>Failed</h3>
        <div class="value fail">${metadata.failedTests}</div>
      </div>
      <div class="summary-card">
        <h3>Pass rate</h3>
        <div class="value neutral">${passRate}%</div>
      </div>
      <div class="summary-card">
        <h3>Total time</h3>
        <div class="value neutral">${(metadata.totalTimeMs / 1000).toFixed(2)}s</div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Test name</th>
          <th>URL</th>
          <th>Device</th>
          <th>Full page</th>
          <th>Status</th>
          <th>Time</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        ${testRows}
      </tbody>
    </table>
  </div>

  <footer>
    <div>Generated by Allscreenshots SDK Integration Tests</div>
    <div class="env-info">
      ${escapeHtml(metadata.osInfo)} | Node.js ${escapeHtml(metadata.runtimeVersion)}
    </div>
  </footer>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
