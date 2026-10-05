# Allscreenshots Typescript SDK

Generated from the public API implemented by https://api.allscreenshots.com. Visit https://allscreenshots.com for an account and API key.

The package is at this repository root. The browser demo is in [sample-app](sample-app/README.md). Run `python3 tools/verify.py --build --fixture` to build and check quota, sync/async capture, binary downloads, replay safety, and error handling without spending credits.

Capture and download operations with mixed content types return raw bodies (typescript native bytes/blob/file/response). This avoids corrupting binary images through JSON decoding. For responseType URL or BASE64, decode the raw JSON into the generated `ScreenshotJsonResponse` model; the demo shows URL capture and a download through the same SDK. Other endpoints return generated typed models.

`sdk-provenance.json` records the canonical contract, generator, configuration, template, dependency, and toolchain hashes. Do not edit generated sources; update the backend contract or generation inputs in `api.allscreenshots.com/sdk-generation`.

## API reference

# @allscreenshots/sdk@2.0.0

A TypeScript SDK client for the api.allscreenshots.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @allscreenshots/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  BulkApi,
} from '@allscreenshots/sdk';
import type { CancelBulkJobRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new BulkApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies CancelBulkJobRequest;

  try {
    const data = await api.cancelBulkJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.allscreenshots.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BulkApi* | [**cancelBulkJob**](docs/BulkApi.md#cancelbulkjob) | **POST** /v1/screenshots/bulk/{id}/cancel | 
*BulkApi* | [**createBulkJob**](docs/BulkApi.md#createbulkjob) | **POST** /v1/screenshots/bulk | 
*BulkApi* | [**getBulkJobStatus**](docs/BulkApi.md#getbulkjobstatus) | **GET** /v1/screenshots/bulk/{id} | 
*BulkApi* | [**listBulkJobs**](docs/BulkApi.md#listbulkjobs) | **GET** /v1/screenshots/bulk | 
*ComposeApi* | [**compose**](docs/ComposeApi.md#composeoperation) | **POST** /v1/screenshots/compose | 
*ComposeApi* | [**getComposeJobStatus**](docs/ComposeApi.md#getcomposejobstatus) | **GET** /v1/screenshots/compose/jobs/{jobId} | 
*ComposeApi* | [**getLayoutPreview**](docs/ComposeApi.md#getlayoutpreview) | **GET** /v1/screenshots/compose/preview | 
*ComposeApi* | [**listComposeJobs**](docs/ComposeApi.md#listcomposejobs) | **GET** /v1/screenshots/compose/jobs | 
*CrawlApi* | [**_delete**](docs/CrawlApi.md#_delete) | **DELETE** /v1/crawls/{id} | 
*CrawlApi* | [**cancel**](docs/CrawlApi.md#cancel) | **POST** /v1/crawls/{id}/cancel | 
*CrawlApi* | [**create**](docs/CrawlApi.md#create) | **POST** /v1/crawls | 
*CrawlApi* | [**get**](docs/CrawlApi.md#get) | **GET** /v1/crawls/{id} | 
*CrawlApi* | [**list**](docs/CrawlApi.md#list) | **GET** /v1/crawls | 
*CrawlApi* | [**output**](docs/CrawlApi.md#output) | **GET** /v1/crawls/{id}/pages/{pageId}/outputs/{output} | 
*CrawlApi* | [**pages**](docs/CrawlApi.md#pages) | **GET** /v1/crawls/{id}/pages | 
*JobApi* | [**cancelJob**](docs/JobApi.md#canceljob) | **POST** /v1/screenshots/jobs/{id}/cancel | 
*JobApi* | [**createAsyncJob**](docs/JobApi.md#createasyncjob) | **POST** /v1/screenshots/async | 
*JobApi* | [**getJobOutputResult**](docs/JobApi.md#getjoboutputresult) | **GET** /v1/screenshots/jobs/{id}/result/{outputId} | 
*JobApi* | [**getJobResult**](docs/JobApi.md#getjobresult) | **GET** /v1/screenshots/jobs/{id}/result | 
*JobApi* | [**getJobStatus**](docs/JobApi.md#getjobstatus) | **GET** /v1/screenshots/jobs/{id} | 
*JobApi* | [**listJobs**](docs/JobApi.md#listjobs) | **GET** /v1/screenshots/jobs | 
*ScheduleApi* | [**createSchedule**](docs/ScheduleApi.md#createscheduleoperation) | **POST** /v1/schedules | 
*ScheduleApi* | [**deleteSchedule**](docs/ScheduleApi.md#deleteschedule) | **DELETE** /v1/schedules/{id} | 
*ScheduleApi* | [**getExecutionHistory**](docs/ScheduleApi.md#getexecutionhistory) | **GET** /v1/schedules/{id}/history | 
*ScheduleApi* | [**getSchedule**](docs/ScheduleApi.md#getschedule) | **GET** /v1/schedules/{id} | 
*ScheduleApi* | [**listSchedules**](docs/ScheduleApi.md#listschedules) | **GET** /v1/schedules | 
*ScheduleApi* | [**pauseSchedule**](docs/ScheduleApi.md#pauseschedule) | **POST** /v1/schedules/{id}/pause | 
*ScheduleApi* | [**resumeSchedule**](docs/ScheduleApi.md#resumeschedule) | **POST** /v1/schedules/{id}/resume | 
*ScheduleApi* | [**triggerSchedule**](docs/ScheduleApi.md#triggerschedule) | **POST** /v1/schedules/{id}/trigger | 
*ScheduleApi* | [**updateSchedule**](docs/ScheduleApi.md#updatescheduleoperation) | **PUT** /v1/schedules/{id} | 
*ScreenshotApi* | [**captureSync**](docs/ScreenshotApi.md#capturesync) | **POST** /v1/screenshots | 
*ScreenshotApi* | [**getSyncCaptureOutputResult**](docs/ScreenshotApi.md#getsynccaptureoutputresult) | **GET** /v1/screenshots/captures/{id}/result/{outputId} | 
*ScreenshotApi* | [**getSyncCaptureResult**](docs/ScreenshotApi.md#getsynccaptureresult) | **GET** /v1/screenshots/captures/{id}/result | 
*ScreenshotApi* | [**submissionStatus**](docs/ScreenshotApi.md#submissionstatus) | **GET** /v1/screenshots/submissions/{key} | 
*UsageApi* | [**getActivity**](docs/UsageApi.md#getactivity) | **GET** /v1/usage/activity | 
*UsageApi* | [**getQuota**](docs/UsageApi.md#getquota) | **GET** /v1/usage/quota | 
*UsageApi* | [**getUsage**](docs/UsageApi.md#getusage) | **GET** /v1/usage | 
*UsageApi* | [**getUsageByKey**](docs/UsageApi.md#getusagebykey) | **GET** /v1/usage/keys | 


### Models

- [ApiKeyUsageDetail](docs/ApiKeyUsageDetail.md)
- [ApiKeyUsageResponse](docs/ApiKeyUsageResponse.md)
- [AsyncJobCreatedResponse](docs/AsyncJobCreatedResponse.md)
- [BandwidthQuotaResponse](docs/BandwidthQuotaResponse.md)
- [BorderConfig](docs/BorderConfig.md)
- [BrowserCookieRequest](docs/BrowserCookieRequest.md)
- [BrowserHeaderRequest](docs/BrowserHeaderRequest.md)
- [BrowserSessionRequest](docs/BrowserSessionRequest.md)
- [BrowserStorageOriginRequest](docs/BrowserStorageOriginRequest.md)
- [BulkDefaults](docs/BulkDefaults.md)
- [BulkJobDetailInfo](docs/BulkJobDetailInfo.md)
- [BulkJobInfo](docs/BulkJobInfo.md)
- [BulkJobSummary](docs/BulkJobSummary.md)
- [BulkRequest](docs/BulkRequest.md)
- [BulkResponse](docs/BulkResponse.md)
- [BulkStatusResponse](docs/BulkStatusResponse.md)
- [BulkUrlOptions](docs/BulkUrlOptions.md)
- [BulkUrlRequest](docs/BulkUrlRequest.md)
- [CaptureDefaults](docs/CaptureDefaults.md)
- [CaptureInfo](docs/CaptureInfo.md)
- [CaptureItem](docs/CaptureItem.md)
- [CaptureUsageCounts](docs/CaptureUsageCounts.md)
- [ClickAction](docs/ClickAction.md)
- [ComposeJobCreatedResponse](docs/ComposeJobCreatedResponse.md)
- [ComposeJobStatusResponse](docs/ComposeJobStatusResponse.md)
- [ComposeJobSummaryResponse](docs/ComposeJobSummaryResponse.md)
- [ComposeMetadata](docs/ComposeMetadata.md)
- [ComposeOutputConfig](docs/ComposeOutputConfig.md)
- [ComposeRequest](docs/ComposeRequest.md)
- [ComposeResponse](docs/ComposeResponse.md)
- [CrawlCreatedResponse](docs/CrawlCreatedResponse.md)
- [CrawlListResponse](docs/CrawlListResponse.md)
- [CrawlPageOutputResponse](docs/CrawlPageOutputResponse.md)
- [CrawlPageResponse](docs/CrawlPageResponse.md)
- [CrawlPagesResponse](docs/CrawlPagesResponse.md)
- [CrawlProgressResponse](docs/CrawlProgressResponse.md)
- [CrawlRequest](docs/CrawlRequest.md)
- [CrawlResponse](docs/CrawlResponse.md)
- [CreateScheduleRequest](docs/CreateScheduleRequest.md)
- [CreditBalanceResponse](docs/CreditBalanceResponse.md)
- [DailyCaptureCountResponse](docs/DailyCaptureCountResponse.md)
- [DeliveryDestination](docs/DeliveryDestination.md)
- [EmailDestination](docs/EmailDestination.md)
- [ErrorDetail](docs/ErrorDetail.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [HoverAction](docs/HoverAction.md)
- [HtmlOutputSpec](docs/HtmlOutputSpec.md)
- [JobResponse](docs/JobResponse.md)
- [JsonFieldSpec](docs/JsonFieldSpec.md)
- [JsonOutputSpec](docs/JsonOutputSpec.md)
- [LabelConfig](docs/LabelConfig.md)
- [LayoutPreviewResponse](docs/LayoutPreviewResponse.md)
- [MarkdownOutputSpec](docs/MarkdownOutputSpec.md)
- [MultiOutputResponse](docs/MultiOutputResponse.md)
- [OutputInfo](docs/OutputInfo.md)
- [OutputSpec](docs/OutputSpec.md)
- [PageAction](docs/PageAction.md)
- [PdfOutputSpec](docs/PdfOutputSpec.md)
- [PeriodUsageResponse](docs/PeriodUsageResponse.md)
- [PlacementPreview](docs/PlacementPreview.md)
- [PressAction](docs/PressAction.md)
- [QuotaDetailResponse](docs/QuotaDetailResponse.md)
- [QuotaResponse](docs/QuotaResponse.md)
- [QuotaStatusResponse](docs/QuotaStatusResponse.md)
- [ScheduleExecutionResponse](docs/ScheduleExecutionResponse.md)
- [ScheduleHistoryResponse](docs/ScheduleHistoryResponse.md)
- [ScheduleListResponse](docs/ScheduleListResponse.md)
- [ScheduleResponse](docs/ScheduleResponse.md)
- [ScheduleScreenshotOptions](docs/ScheduleScreenshotOptions.md)
- [ScreenshotJsonResponse](docs/ScreenshotJsonResponse.md)
- [ScreenshotOutputSpec](docs/ScreenshotOutputSpec.md)
- [ScreenshotRequest](docs/ScreenshotRequest.md)
- [ScrollAction](docs/ScrollAction.md)
- [SelectAction](docs/SelectAction.md)
- [ShadowConfig](docs/ShadowConfig.md)
- [TotalsResponse](docs/TotalsResponse.md)
- [TypeAction](docs/TypeAction.md)
- [UpdateScheduleRequest](docs/UpdateScheduleRequest.md)
- [UsageOrganizationResponse](docs/UsageOrganizationResponse.md)
- [UsageResponse](docs/UsageResponse.md)
- [VariantConfig](docs/VariantConfig.md)
- [ViewportConfig](docs/ViewportConfig.md)
- [WaitAction](docs/WaitAction.md)
- [WebhookDestination](docs/WebhookDestination.md)

### Authorization


Authentication schemes defined for the API:
<a id="ApiKey"></a>
#### ApiKey


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `2.0.0`
- Generator version: `7.25.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0.html)
