# BulkApi

All URIs are relative to *https://api.allscreenshots.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelBulkJob**](BulkApi.md#cancelbulkjob) | **POST** /v1/screenshots/bulk/{id}/cancel |  |
| [**createBulkJob**](BulkApi.md#createbulkjob) | **POST** /v1/screenshots/bulk |  |
| [**getBulkJobStatus**](BulkApi.md#getbulkjobstatus) | **GET** /v1/screenshots/bulk/{id} |  |
| [**listBulkJobs**](BulkApi.md#listbulkjobs) | **GET** /v1/screenshots/bulk |  |



## cancelBulkJob

> BulkJobSummary cancelBulkJob(id)



### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**BulkJobSummary**](BulkJobSummary.md)

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


## createBulkJob

> BulkResponse createBulkJob(bulkRequest)



### Example

```ts
import {
  Configuration,
  BulkApi,
} from '@allscreenshots/sdk';
import type { CreateBulkJobRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new BulkApi(config);

  const body = {
    // BulkRequest
    bulkRequest: ...,
  } satisfies CreateBulkJobRequest;

  try {
    const data = await api.createBulkJob(body);
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
| **bulkRequest** | [BulkRequest](BulkRequest.md) |  | |

### Return type

[**BulkResponse**](BulkResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | OK |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkJobStatus

> BulkStatusResponse getBulkJobStatus(id)



### Example

```ts
import {
  Configuration,
  BulkApi,
} from '@allscreenshots/sdk';
import type { GetBulkJobStatusRequest } from '@allscreenshots/sdk';

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
  } satisfies GetBulkJobStatusRequest;

  try {
    const data = await api.getBulkJobStatus(body);
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

[**BulkStatusResponse**](BulkStatusResponse.md)

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


## listBulkJobs

> Array&lt;BulkJobSummary&gt; listBulkJobs()



### Example

```ts
import {
  Configuration,
  BulkApi,
} from '@allscreenshots/sdk';
import type { ListBulkJobsRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new BulkApi(config);

  try {
    const data = await api.listBulkJobs();
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

[**Array&lt;BulkJobSummary&gt;**](BulkJobSummary.md)

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

