# ScreenshotApi

All URIs are relative to *https://api.allscreenshots.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**captureSync**](ScreenshotApi.md#capturesync) | **POST** /v1/screenshots |  |
| [**getSyncCaptureOutputResult**](ScreenshotApi.md#getsynccaptureoutputresult) | **GET** /v1/screenshots/captures/{id}/result/{outputId} |  |
| [**getSyncCaptureResult**](ScreenshotApi.md#getsynccaptureresult) | **GET** /v1/screenshots/captures/{id}/result |  |
| [**submissionStatus**](ScreenshotApi.md#submissionstatus) | **GET** /v1/screenshots/submissions/{key} |  |



## captureSync

> Blob captureSync(screenshotRequest, idempotencyKey)



### Example

```ts
import {
  Configuration,
  ScreenshotApi,
} from '@allscreenshots/sdk';
import type { CaptureSyncRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScreenshotApi(config);

  const body = {
    // ScreenshotRequest
    screenshotRequest: ...,
    // string | Unique submission key. Supported for responseType=url; reuse with the same body to recover the original result. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CaptureSyncRequest;

  try {
    const data = await api.captureSync(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **screenshotRequest** | [ScreenshotRequest](ScreenshotRequest.md) |  | |
| **idempotencyKey** | `string` | Unique submission key. Supported for responseType&#x3D;url; reuse with the same body to recover the original result. | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Binary capture or JSON, according to responseType and outputs |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSyncCaptureOutputResult

> Blob getSyncCaptureOutputResult(id, outputId)



### Example

```ts
import {
  Configuration,
  ScreenshotApi,
} from '@allscreenshots/sdk';
import type { GetSyncCaptureOutputResultRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScreenshotApi(config);

  const body = {
    // string
    id: id_example,
    // string
    outputId: outputId_example,
  } satisfies GetSyncCaptureOutputResultRequest;

  try {
    const data = await api.getSyncCaptureOutputResult(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **outputId** | `string` |  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stored capture output |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSyncCaptureResult

> Blob getSyncCaptureResult(id)



### Example

```ts
import {
  Configuration,
  ScreenshotApi,
} from '@allscreenshots/sdk';
import type { GetSyncCaptureResultRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScreenshotApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetSyncCaptureResultRequest;

  try {
    const data = await api.getSyncCaptureResult(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stored capture output |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submissionStatus

> object submissionStatus(key)



### Example

```ts
import {
  Configuration,
  ScreenshotApi,
} from '@allscreenshots/sdk';
import type { SubmissionStatusRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScreenshotApi(config);

  const body = {
    // string
    key: key_example,
  } satisfies SubmissionStatusRequest;

  try {
    const data = await api.submissionStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

