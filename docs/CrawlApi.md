# CrawlApi

All URIs are relative to *https://api.allscreenshots.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**_delete**](CrawlApi.md#_delete) | **DELETE** /v1/crawls/{id} |  |
| [**cancel**](CrawlApi.md#cancel) | **POST** /v1/crawls/{id}/cancel |  |
| [**create**](CrawlApi.md#create) | **POST** /v1/crawls |  |
| [**get**](CrawlApi.md#get) | **GET** /v1/crawls/{id} |  |
| [**list**](CrawlApi.md#list) | **GET** /v1/crawls |  |
| [**output**](CrawlApi.md#output) | **GET** /v1/crawls/{id}/pages/{pageId}/outputs/{output} |  |
| [**pages**](CrawlApi.md#pages) | **GET** /v1/crawls/{id}/pages |  |



## _delete

> _delete(id)



### Example

```ts
import {
  Configuration,
  CrawlApi,
} from '@allscreenshots/sdk';
import type { DeleteRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CrawlApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteRequest;

  try {
    const data = await api._delete(body);
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

`void` (Empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | OK |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancel

> CrawlResponse cancel(id)



### Example

```ts
import {
  Configuration,
  CrawlApi,
} from '@allscreenshots/sdk';
import type { CancelRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CrawlApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies CancelRequest;

  try {
    const data = await api.cancel(body);
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

[**CrawlResponse**](CrawlResponse.md)

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


## create

> CrawlCreatedResponse create(crawlRequest)



### Example

```ts
import {
  Configuration,
  CrawlApi,
} from '@allscreenshots/sdk';
import type { CreateRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CrawlApi(config);

  const body = {
    // CrawlRequest
    crawlRequest: ...,
  } satisfies CreateRequest;

  try {
    const data = await api.create(body);
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
| **crawlRequest** | [CrawlRequest](CrawlRequest.md) |  | |

### Return type

[**CrawlCreatedResponse**](CrawlCreatedResponse.md)

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


## get

> CrawlResponse get(id)



### Example

```ts
import {
  Configuration,
  CrawlApi,
} from '@allscreenshots/sdk';
import type { GetRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CrawlApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetRequest;

  try {
    const data = await api.get(body);
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

[**CrawlResponse**](CrawlResponse.md)

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


## list

> CrawlListResponse list(page, pageSize)



### Example

```ts
import {
  Configuration,
  CrawlApi,
} from '@allscreenshots/sdk';
import type { ListRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CrawlApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListRequest;

  try {
    const data = await api.list(body);
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
| **page** | `number` |  | [Optional] [Defaults to `0`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**CrawlListResponse**](CrawlListResponse.md)

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


## output

> Blob output(id, pageId, output)



### Example

```ts
import {
  Configuration,
  CrawlApi,
} from '@allscreenshots/sdk';
import type { OutputRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CrawlApi(config);

  const body = {
    // string
    id: id_example,
    // string
    pageId: pageId_example,
    // string
    output: output_example,
  } satisfies OutputRequest;

  try {
    const data = await api.output(body);
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
| **pageId** | `string` |  | [Defaults to `undefined`] |
| **output** | `string` |  | [Defaults to `undefined`] |

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


## pages

> CrawlPagesResponse pages(id, page, pageSize)



### Example

```ts
import {
  Configuration,
  CrawlApi,
} from '@allscreenshots/sdk';
import type { PagesRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CrawlApi(config);

  const body = {
    // string
    id: id_example,
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies PagesRequest;

  try {
    const data = await api.pages(body);
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
| **page** | `number` |  | [Optional] [Defaults to `0`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**CrawlPagesResponse**](CrawlPagesResponse.md)

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

