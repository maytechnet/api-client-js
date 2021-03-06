# QuatrixApi.InboxApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inboxGet**](InboxApi.md#inboxGet) | **GET** /inbox | Get contact&#39;s share tracking


<a name="inboxGet"></a>
# **inboxGet**
> [Object] inboxGet(opts)

Get contact&#39;s share tracking

Retrieve the tracking of actions where the contact was the recipient. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.InboxApi();

var opts = { 
  'id': "id_example", // String | Inbox ID
  'limit': 100, // Number | Rows per page
  'from': 0, // Number | UTC timestamp
  'to': 8.14 // Number | UTC timestamp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inboxGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Inbox ID | [optional] 
 **limit** | **Number**| Rows per page | [optional] [default to 100]
 **from** | **Number**| UTC timestamp | [optional] [default to 0]
 **to** | **Number**| UTC timestamp | [optional] 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

