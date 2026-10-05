# ScheduleApi

All URIs are relative to *https://api.allscreenshots.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSchedule**](ScheduleApi.md#createscheduleoperation) | **POST** /v1/schedules |  |
| [**deleteSchedule**](ScheduleApi.md#deleteschedule) | **DELETE** /v1/schedules/{id} |  |
| [**getExecutionHistory**](ScheduleApi.md#getexecutionhistory) | **GET** /v1/schedules/{id}/history |  |
| [**getSchedule**](ScheduleApi.md#getschedule) | **GET** /v1/schedules/{id} |  |
| [**listSchedules**](ScheduleApi.md#listschedules) | **GET** /v1/schedules |  |
| [**pauseSchedule**](ScheduleApi.md#pauseschedule) | **POST** /v1/schedules/{id}/pause |  |
| [**resumeSchedule**](ScheduleApi.md#resumeschedule) | **POST** /v1/schedules/{id}/resume |  |
| [**triggerSchedule**](ScheduleApi.md#triggerschedule) | **POST** /v1/schedules/{id}/trigger |  |
| [**updateSchedule**](ScheduleApi.md#updatescheduleoperation) | **PUT** /v1/schedules/{id} |  |



## createSchedule

> ScheduleResponse createSchedule(createScheduleRequest)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { CreateScheduleOperationRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // CreateScheduleRequest
    createScheduleRequest: ...,
  } satisfies CreateScheduleOperationRequest;

  try {
    const data = await api.createSchedule(body);
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
| **createScheduleRequest** | [CreateScheduleRequest](CreateScheduleRequest.md) |  | |

### Return type

[**ScheduleResponse**](ScheduleResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | OK |  -  |
| **400** | API error |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **404** | API error |  -  |
| **409** | API error |  -  |
| **422** | API error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSchedule

> deleteSchedule(id)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { DeleteScheduleRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies DeleteScheduleRequest;

  try {
    const data = await api.deleteSchedule(body);
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


## getExecutionHistory

> ScheduleHistoryResponse getExecutionHistory(id, limit)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { GetExecutionHistoryRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // string
    id: id_example,
    // number (optional)
    limit: 56,
  } satisfies GetExecutionHistoryRequest;

  try {
    const data = await api.getExecutionHistory(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**ScheduleHistoryResponse**](ScheduleHistoryResponse.md)

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


## getSchedule

> ScheduleResponse getSchedule(id)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { GetScheduleRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetScheduleRequest;

  try {
    const data = await api.getSchedule(body);
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

[**ScheduleResponse**](ScheduleResponse.md)

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


## listSchedules

> ScheduleListResponse listSchedules()



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { ListSchedulesRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  try {
    const data = await api.listSchedules();
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

[**ScheduleListResponse**](ScheduleListResponse.md)

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


## pauseSchedule

> ScheduleResponse pauseSchedule(id)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { PauseScheduleRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies PauseScheduleRequest;

  try {
    const data = await api.pauseSchedule(body);
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

[**ScheduleResponse**](ScheduleResponse.md)

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


## resumeSchedule

> ScheduleResponse resumeSchedule(id)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { ResumeScheduleRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ResumeScheduleRequest;

  try {
    const data = await api.resumeSchedule(body);
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

[**ScheduleResponse**](ScheduleResponse.md)

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


## triggerSchedule

> ScheduleResponse triggerSchedule(id)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { TriggerScheduleRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies TriggerScheduleRequest;

  try {
    const data = await api.triggerSchedule(body);
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

[**ScheduleResponse**](ScheduleResponse.md)

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


## updateSchedule

> ScheduleResponse updateSchedule(id, updateScheduleRequest)



### Example

```ts
import {
  Configuration,
  ScheduleApi,
} from '@allscreenshots/sdk';
import type { UpdateScheduleOperationRequest } from '@allscreenshots/sdk';

async function example() {
  console.log("🚀 Testing @allscreenshots/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new ScheduleApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateScheduleRequest
    updateScheduleRequest: ...,
  } satisfies UpdateScheduleOperationRequest;

  try {
    const data = await api.updateSchedule(body);
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
| **updateScheduleRequest** | [UpdateScheduleRequest](UpdateScheduleRequest.md) |  | |

### Return type

[**ScheduleResponse**](ScheduleResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
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

