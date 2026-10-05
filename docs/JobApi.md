# JobApi

All URIs are relative to *https://api.allscreenshots.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelJob**](JobApi.md#canceljob) | **POST** /v1/screenshots/jobs/{id}/cancel |  |
| [**createAsyncJob**](JobApi.md#createasyncjob) | **POST** /v1/screenshots/async |  |
| [**getJobOutputResult**](JobApi.md#getjoboutputresult) | **GET** /v1/screenshots/jobs/{id}/result/{outputId} |  |
| [**getJobResult**](JobApi.md#getjobresult) | **GET** /v1/screenshots/jobs/{id}/result |  |
| [**getJobStatus**](JobApi.md#getjobstatus) | **GET** /v1/screenshots/jobs/{id} |  |
| [**listJobs**](JobApi.md#listjobs) | **GET** /v1/screenshots/jobs |  |



## cancelJob

> JobResponse cancelJob(id)



### Example

```ts
import {
  Configuration,
  JobApi,
} from '@allscreenshots/sdk';
import type { CancelJobRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new JobApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies CancelJobRequest;

  try {
    const data = await api.cancelJob(body);
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

[**JobResponse**](JobResponse.md)

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


## createAsyncJob

> AsyncJobCreatedResponse createAsyncJob(screenshotRequest, idempotencyKey)



### Example

```ts
import {
  Configuration,
  JobApi,
} from '@allscreenshots/sdk';
import type { CreateAsyncJobRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new JobApi(config);

  const body = {
    // ScreenshotRequest
    screenshotRequest: ...,
    // string | Unique submission key. Supported for responseType=url; reuse with the same body to recover the original result. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateAsyncJobRequest;

  try {
    const data = await api.createAsyncJob(body);
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

[**AsyncJobCreatedResponse**](AsyncJobCreatedResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Capture accepted |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobOutputResult

> Blob getJobOutputResult(id, outputId)



### Example

```ts
import {
  Configuration,
  JobApi,
} from '@allscreenshots/sdk';
import type { GetJobOutputResultRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new JobApi(config);

  const body = {
    // string
    id: id_example,
    // string
    outputId: outputId_example,
  } satisfies GetJobOutputResultRequest;

  try {
    const data = await api.getJobOutputResult(body);
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


## getJobResult

> Blob getJobResult(id)



### Example

```ts
import {
  Configuration,
  JobApi,
} from '@allscreenshots/sdk';
import type { GetJobResultRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new JobApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetJobResultRequest;

  try {
    const data = await api.getJobResult(body);
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


## getJobStatus

> JobResponse getJobStatus(id)



### Example

```ts
import {
  Configuration,
  JobApi,
} from '@allscreenshots/sdk';
import type { GetJobStatusRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new JobApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetJobStatusRequest;

  try {
    const data = await api.getJobStatus(body);
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

[**JobResponse**](JobResponse.md)

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


## listJobs

> Array&lt;JobResponse&gt; listJobs()



### Example

```ts
import {
  Configuration,
  JobApi,
} from '@allscreenshots/sdk';
import type { ListJobsRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new JobApi(config);

  try {
    const data = await api.listJobs();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;JobResponse&gt;**](JobResponse.md)

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

