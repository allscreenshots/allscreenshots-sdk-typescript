const fs = require('node:fs/promises');
const crypto = require('node:crypto');
const sdk = require('../dist/index.js');
async function main() {
  const config = new sdk.Configuration({basePath: process.env.ALLSCREENSHOTS_BASE_URL || 'https://api.allscreenshots.com', apiKey: process.env.ALLSCREENSHOTS_API_KEY});
  const screenshots = new sdk.ScreenshotApi(config), jobs = new sdk.JobApi(config);
  const mode = process.argv[2] || 'quota';
  if (mode === 'quota') { console.log(JSON.stringify(await new sdk.UsageApi(config).getQuota())); return; }
  const request = {url: process.env.ALLSCREENSHOTS_URL || 'https://example.com', responseType: 'URL', format: 'png'};
  const key = process.env.ALLSCREENSHOTS_IDEMPOTENCY_KEY || crypto.randomUUID();
  let body;
  if (mode === 'sync') {
    const data = sdk.ScreenshotJsonResponseFromJSON(JSON.parse(await (await screenshots.captureSync({screenshotRequest:request, idempotencyKey:key})).text()));
    const id = new URL(data.resultUrl, config.basePath).pathname.split('/').at(-2);
    body = await screenshots.getSyncCaptureResult({id});
  } else if (mode === 'async') {
    const job = await jobs.createAsyncJob({screenshotRequest: request, idempotencyKey:key});
    const deadline = Date.now() + 180000;
    while (true) {
      const status = await jobs.getJobStatus({id:job.id});
      if (status.status === 'COMPLETED') break;
      if (['FAILED','CANCELLED'].includes(status.status)) throw new Error(status.errorMessage || status.status);
      if (Date.now() > deadline) throw new Error('Capture polling timed out');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    body = await jobs.getJobResult({id:job.id});
  } else throw new Error('Expected quota, sync, or async');
  const output = process.env.ALLSCREENSHOTS_OUTPUT || 'capture.png';
  await fs.writeFile(output, Buffer.from(await body.arrayBuffer()));
  console.log(JSON.stringify({output}));
}
main().catch(() => { console.error('SDK request failed. Check authentication, quota, and the API response.'); process.exitCode=1; });
