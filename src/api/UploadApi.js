/**
 * Quatrix API
 * Download and upload files or folders, share them with predefined security options, manage your account and profile settings and a lot more functionalities can be easily integrated into your application using our Quatrix APIs. Learn more how to authenticate the Quatrix session, how to construct JSON formatted API calls and what responses to expect in our [API Guide](https://docs.maytech.net/display/MD/Quatrix+API).
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/FileModifyReq', 'model/FileModifyResp', 'model/SettingsUploadLogoLinkResp', 'model/UploadFinalizeResp', 'model/UploadLinkReq'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/FileModifyReq'), require('../model/FileModifyResp'), require('../model/SettingsUploadLogoLinkResp'), require('../model/UploadFinalizeResp'), require('../model/UploadLinkReq'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.UploadApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ErrorModel, root.QuatrixApi.FileModifyReq, root.QuatrixApi.FileModifyResp, root.QuatrixApi.SettingsUploadLogoLinkResp, root.QuatrixApi.UploadFinalizeResp, root.QuatrixApi.UploadLinkReq);
  }
}(this, function(ApiClient, ErrorModel, FileModifyReq, FileModifyResp, SettingsUploadLogoLinkResp, UploadFinalizeResp, UploadLinkReq) {
  'use strict';

  /**
   * Upload service.
   * @module api/UploadApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UploadApi. 
   * @alias module:api/UploadApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the fileModifyPost operation.
     * @callback module:api/UploadApi~fileModifyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileModifyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file modification link
     * Get file modification link 
     * @param {module:model/FileModifyReq} body 
     * @param {module:api/UploadApi~fileModifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileModifyResp}
     */
    this.fileModifyPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fileModifyPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileModifyResp;

      return this.apiClient.callApi(
        '/file/modify', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the settingsUploadLogoLinkGet operation.
     * @callback module:api/UploadApi~settingsUploadLogoLinkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SettingsUploadLogoLinkResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a new logo upload link
     * Get a unique key for uploading a new logo 
     * @param {module:api/UploadApi~settingsUploadLogoLinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SettingsUploadLogoLinkResp}
     */
    this.settingsUploadLogoLinkGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SettingsUploadLogoLinkResp;

      return this.apiClient.callApi(
        '/settings/upload-logo-link', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadFinalizeIdGet operation.
     * @callback module:api/UploadApi~uploadFinalizeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UploadFinalizeResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finalize chunked file upload
     * Complete the chunked upload of a file. 
     * @param {String} id Upload key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.mtime File modification timestamp
     * @param {module:api/UploadApi~uploadFinalizeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UploadFinalizeResp}
     */
    this.uploadFinalizeIdGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling uploadFinalizeIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'mtime': opts['mtime'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UploadFinalizeResp;

      return this.apiClient.callApi(
        '/upload/finalize/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadLinkPost operation.
     * @callback module:api/UploadApi~uploadLinkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileModifyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file upload link
     * Retrieve a link for uploading a file. 
     * @param {module:model/UploadLinkReq} body 
     * @param {module:api/UploadApi~uploadLinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileModifyResp}
     */
    this.uploadLinkPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadLinkPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileModifyResp;

      return this.apiClient.callApi(
        '/upload/link', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
