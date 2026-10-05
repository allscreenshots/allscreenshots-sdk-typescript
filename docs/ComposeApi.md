# ComposeApi

All URIs are relative to *https://api.allscreenshots.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**compose**](ComposeApi.md#composeoperation) | **POST** /v1/screenshots/compose |  |
| [**getComposeJobStatus**](ComposeApi.md#getcomposejobstatus) | **GET** /v1/screenshots/compose/jobs/{jobId} |  |
| [**getLayoutPreview**](ComposeApi.md#getlayoutpreview) | **GET** /v1/screenshots/compose/preview |  |
| [**listComposeJobs**](ComposeApi.md#listcomposejobs) | **GET** /v1/screenshots/compose/jobs |  |



## compose

> Blob compose(composeRequest)



### Example

```ts
import {
  Configuration,
  ComposeApi,
} from '@allscreenshots/sdk';
import type { ComposeOperationRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ComposeApi(config);

  const body = {
    // ComposeRequest
    composeRequest: ...,
  } satisfies ComposeOperationRequest;

  try {
    const data = await api.compose(body);
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
| **composeRequest** | [ComposeRequest](ComposeRequest.md) |  | |

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
| **200** | Composed image |  -  |
| **202** | Composition accepted |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComposeJobStatus

> ComposeJobStatusResponse getComposeJobStatus(jobId)



### Example

```ts
import {
  Configuration,
  ComposeApi,
} from '@allscreenshots/sdk';
import type { GetComposeJobStatusRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ComposeApi(config);

  const body = {
    // string
    jobId: jobId_example,
  } satisfies GetComposeJobStatusRequest;

  try {
    const data = await api.getComposeJobStatus(body);
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
| **jobId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ComposeJobStatusResponse**](ComposeJobStatusResponse.md)

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


## getLayoutPreview

> LayoutPreviewResponse getLayoutPreview(layout, imageCount, canvasWidth, canvasHeight, aspectRatios)



### Example

```ts
import {
  Configuration,
  ComposeApi,
} from '@allscreenshots/sdk';
import type { GetLayoutPreviewRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ComposeApi(config);

  const body = {
    // string
    layout: layout_example,
    // number
    imageCount: 56,
    // number (optional)
    canvasWidth: 56,
    // number (optional)
    canvasHeight: 56,
    // Array<number> (optional)
    aspectRatios: ...,
  } satisfies GetLayoutPreviewRequest;

  try {
    const data = await api.getLayoutPreview(body);
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
| **layout** | `string` |  | [Defaults to `undefined`] |
| **imageCount** | `number` |  | [Defaults to `undefined`] |
| **canvasWidth** | `number` |  | [Optional] [Defaults to `1200`] |
| **canvasHeight** | `number` |  | [Optional] [Defaults to `800`] |
| **aspectRatios** | `Array<number>` |  | [Optional] |

### Return type

[**LayoutPreviewResponse**](LayoutPreviewResponse.md)

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


## listComposeJobs

> Array&lt;ComposeJobSummaryResponse&gt; listComposeJobs()



### Example

```ts
import {
  Configuration,
  ComposeApi,
} from '@allscreenshots/sdk';
import type { ListComposeJobsRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ComposeApi(config);

  try {
    const data = await api.listComposeJobs();
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

[**Array&lt;ComposeJobSummaryResponse&gt;**](ComposeJobSummaryResponse.md)

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

