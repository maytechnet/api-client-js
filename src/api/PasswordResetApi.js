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
    define(['ApiClient', 'model/ErrorModel', 'model/IdResp', 'model/InlineResponse202', 'model/ResetPasswordMetadataResp', 'model/ResetPasswordRequestReq', 'model/ResetPasswordRequestResp', 'model/ResetPasswordResetReq'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/IdResp'), require('../model/InlineResponse202'), require('../model/ResetPasswordMetadataResp'), require('../model/ResetPasswordRequestReq'), require('../model/ResetPasswordRequestResp'), require('../model/ResetPasswordResetReq'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.PasswordResetApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ErrorModel, root.QuatrixApi.IdResp, root.QuatrixApi.InlineResponse202, root.QuatrixApi.ResetPasswordMetadataResp, root.QuatrixApi.ResetPasswordRequestReq, root.QuatrixApi.ResetPasswordRequestResp, root.QuatrixApi.ResetPasswordResetReq);
  }
}(this, function(ApiClient, ErrorModel, IdResp, InlineResponse202, ResetPasswordMetadataResp, ResetPasswordRequestReq, ResetPasswordRequestResp, ResetPasswordResetReq) {
  'use strict';

  /**
   * PasswordReset service.
   * @module api/PasswordResetApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PasswordResetApi. 
   * @alias module:api/PasswordResetApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the resetPasswordMetadataIdGet operation.
     * @callback module:api/PasswordResetApi~resetPasswordMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResetPasswordMetadataResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get password reset request metadata
     * Retrieve information about the password reset request. 
     * @param {String} id ID of the password reset request
     * @param {module:api/PasswordResetApi~resetPasswordMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResetPasswordMetadataResp}
     */
    this.resetPasswordMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling resetPasswordMetadataIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResetPasswordMetadataResp;

      return this.apiClient.callApi(
        '/reset-password/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPasswordRequestPost operation.
     * @callback module:api/PasswordResetApi~resetPasswordRequestPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResetPasswordRequestResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request password reset
     * Send an email with the request to reset password (including the link) to the user. 
     * @param {module:model/ResetPasswordRequestReq} body 
     * @param {module:api/PasswordResetApi~resetPasswordRequestPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResetPasswordRequestResp}
     */
    this.resetPasswordRequestPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPasswordRequestPost");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResetPasswordRequestResp;

      return this.apiClient.callApi(
        '/reset-password/request', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPasswordResetIdPost operation.
     * @callback module:api/PasswordResetApi~resetPasswordResetIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset password
     * Change the password based on the existing password reset request. 
     * @param {String} id ID of a password reset request
     * @param {module:model/ResetPasswordResetReq} body 
     * @param {module:api/PasswordResetApi~resetPasswordResetIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResp}
     */
    this.resetPasswordResetIdPost = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling resetPasswordResetIdPost");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPasswordResetIdPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IdResp;

      return this.apiClient.callApi(
        '/reset-password/reset/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
