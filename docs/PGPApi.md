# QuatrixApi.PGPApi

All URIs are relative to *https://api.quatrix.it/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactPgpKeyIdGet**](PGPApi.md#contactPgpKeyIdGet) | **GET** /contact/pgp-key/{id} | Get contact&#39;s PGP key
[**keyRequestMetadataIdGet**](PGPApi.md#keyRequestMetadataIdGet) | **GET** /key-request/metadata/{id} | Get PGP key request metadata
[**keyRequestRespondIdPost**](PGPApi.md#keyRequestRespondIdPost) | **POST** /key-request/respond/{id} | Respond to PGP key request
[**pgpKeyCreatePost**](PGPApi.md#pgpKeyCreatePost) | **POST** /pgp-key/create | Create PGP key
[**pgpKeyDeleteIdGet**](PGPApi.md#pgpKeyDeleteIdGet) | **GET** /pgp-key/delete/{id} | Delete PGP key
[**pgpKeyEditIdPost**](PGPApi.md#pgpKeyEditIdPost) | **POST** /pgp-key/edit/{id} | Edit PGP key
[**pgpKeyMetadataIdGet**](PGPApi.md#pgpKeyMetadataIdGet) | **GET** /pgp-key/metadata/{id} | Get PGP key metadata
[**pgpKeyRecipientsPost**](PGPApi.md#pgpKeyRecipientsPost) | **POST** /pgp-key/recipients | Get recipients&#39; PGP keys
[**pgpKeyRequestPost**](PGPApi.md#pgpKeyRequestPost) | **POST** /pgp-key/request | Request PGP key
[**userPgpKeyIdGet**](PGPApi.md#userPgpKeyIdGet) | **GET** /user/pgp-key/{id} | Get user&#39;s PGP key


<a name="contactPgpKeyIdGet"></a>
# **contactPgpKeyIdGet**
> PgpKeyResp contactPgpKeyIdGet(id)

Get contact&#39;s PGP key

Use to retrieve PGP key generated by the contact. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var id = "id_example"; // String | ID of a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactPgpKeyIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a contact | 

### Return type

[**PgpKeyResp**](PgpKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="keyRequestMetadataIdGet"></a>
# **keyRequestMetadataIdGet**
> KeyRequestMetadataResp keyRequestMetadataIdGet(id)

Get PGP key request metadata

Retrieve details about PGP key generation request. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var id = "id_example"; // String | ID of the PGP key request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.keyRequestMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of the PGP key request | 

### Return type

[**KeyRequestMetadataResp**](KeyRequestMetadataResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="keyRequestRespondIdPost"></a>
# **keyRequestRespondIdPost**
> JobResp keyRequestRespondIdPost(id, body)

Respond to PGP key request

Respond to PGP key request with PGP key 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var id = "id_example"; // String | ID of a PGP key request

var body = new QuatrixApi.KeyRequestRespondReq(); // KeyRequestRespondReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.keyRequestRespondIdPost(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a PGP key request | 
 **body** | [**KeyRequestRespondReq**](KeyRequestRespondReq.md)|  | 

### Return type

[**JobResp**](JobResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pgpKeyCreatePost"></a>
# **pgpKeyCreatePost**
> PgpKeyResp pgpKeyCreatePost(body)

Create PGP key

Generate a new PGP key 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var body = new QuatrixApi.PgpCreateReq(); // PgpCreateReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pgpKeyCreatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PgpCreateReq**](PgpCreateReq.md)|  | 

### Return type

[**PgpKeyResp**](PgpKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pgpKeyDeleteIdGet"></a>
# **pgpKeyDeleteIdGet**
> IdResp pgpKeyDeleteIdGet(id)

Delete PGP key

Delete an existing PGP key. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var id = "id_example"; // String | ID of a PGP key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pgpKeyDeleteIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a PGP key | 

### Return type

[**IdResp**](IdResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pgpKeyEditIdPost"></a>
# **pgpKeyEditIdPost**
> PgpKeyResp pgpKeyEditIdPost(id, opts)

Edit PGP key

Edit an existing PGP key. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var id = "id_example"; // String | ID of a PGP key

var opts = { 
  'body': new QuatrixApi.PgpEditReq() // PgpEditReq | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pgpKeyEditIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a PGP key | 
 **body** | [**PgpEditReq**](PgpEditReq.md)|  | [optional] 

### Return type

[**PgpKeyResp**](PgpKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pgpKeyMetadataIdGet"></a>
# **pgpKeyMetadataIdGet**
> PgpKeyResp pgpKeyMetadataIdGet(id)

Get PGP key metadata

Retrieve information about PGP key containing the ID, name and email of the creator, date it was created and modified, public and private keys. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var id = "id_example"; // String | ID of a PGP key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pgpKeyMetadataIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a PGP key | 

### Return type

[**PgpKeyResp**](PgpKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pgpKeyRecipientsPost"></a>
# **pgpKeyRecipientsPost**
> [Object] pgpKeyRecipientsPost(body)

Get recipients&#39; PGP keys

Get public PGP keys for given recipients 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var body = new QuatrixApi.IdsReq(); // IdsReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pgpKeyRecipientsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdsReq**](IdsReq.md)|  | 

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="pgpKeyRequestPost"></a>
# **pgpKeyRequestPost**
> JobResp pgpKeyRequestPost(body)

Request PGP key

Send PGP key generation request to a user or a contact. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var body = new QuatrixApi.IdsReq(); // IdsReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pgpKeyRequestPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdsReq**](IdsReq.md)|  | 

### Return type

[**JobResp**](JobResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userPgpKeyIdGet"></a>
# **userPgpKeyIdGet**
> PgpKeyResp userPgpKeyIdGet(id)

Get user&#39;s PGP key

Use to retrieve PGP key generated by the user. 

### Example
```javascript
var QuatrixApi = require('quatrix_api');
var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new QuatrixApi.PGPApi();

var id = "id_example"; // String | ID of a user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPgpKeyIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of a user | 

### Return type

[**PgpKeyResp**](PgpKeyResp.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
