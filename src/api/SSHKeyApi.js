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
    define(['ApiClient', 'model/ErrorModel', 'model/IdResp', 'model/SshKeyCreateReq', 'model/SshKeyDeleteReq', 'model/SshKeyEditReq', 'model/SshKeyResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/IdResp'), require('../model/SshKeyCreateReq'), require('../model/SshKeyDeleteReq'), require('../model/SshKeyEditReq'), require('../model/SshKeyResp'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.SSHKeyApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ErrorModel, root.QuatrixApi.IdResp, root.QuatrixApi.SshKeyCreateReq, root.QuatrixApi.SshKeyDeleteReq, root.QuatrixApi.SshKeyEditReq, root.QuatrixApi.SshKeyResp);
  }
}(this, function(ApiClient, ErrorModel, IdResp, SshKeyCreateReq, SshKeyDeleteReq, SshKeyEditReq, SshKeyResp) {
  'use strict';

  /**
   * SSHKey service.
   * @module api/SSHKeyApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SSHKeyApi. 
   * @alias module:api/SSHKeyApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the sshKeyCreatePost operation.
     * @callback module:api/SSHKeyApi~sshKeyCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SshKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new SSH key
     * Generate a new SSH key. 
     * @param {module:model/SshKeyCreateReq} body 
     * @param {module:api/SSHKeyApi~sshKeyCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SshKeyResp}
     */
    this.sshKeyCreatePost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sshKeyCreatePost");
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
      var returnType = SshKeyResp;

      return this.apiClient.callApi(
        '/ssh-key/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sshKeyDeletePost operation.
     * @callback module:api/SSHKeyApi~sshKeyDeletePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete SSH key
     * Remove the key specified by SSH key ID. 
     * @param {module:model/SshKeyDeleteReq} body 
     * @param {module:api/SSHKeyApi~sshKeyDeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResp}
     */
    this.sshKeyDeletePost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sshKeyDeletePost");
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
      var returnType = IdResp;

      return this.apiClient.callApi(
        '/ssh-key/delete', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sshKeyEditPost operation.
     * @callback module:api/SSHKeyApi~sshKeyEditPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SshKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit SSH key metadata
     * Update the metadata of SSH key. 
     * @param {module:model/SshKeyEditReq} body 
     * @param {module:api/SSHKeyApi~sshKeyEditPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SshKeyResp}
     */
    this.sshKeyEditPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sshKeyEditPost");
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
      var returnType = SshKeyResp;

      return this.apiClient.callApi(
        '/ssh-key/edit', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sshKeyGet operation.
     * @callback module:api/SSHKeyApi~sshKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SshKeyResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all available SSH keys
     * Get SSH keys of all available users that the current logged-in user can manage. 
     * @param {module:api/SSHKeyApi~sshKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SshKeyResp>}
     */
    this.sshKeyGet = function(callback) {
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
      var returnType = [SshKeyResp];

      return this.apiClient.callApi(
        '/ssh-key/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sshKeyIdGet operation.
     * @callback module:api/SSHKeyApi~sshKeyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SshKeyResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available SSH keys by the given user ID.
     * Get user&#39;s SSH keys by given user ID. 
     * @param {String} id SSH key ID
     * @param {module:api/SSHKeyApi~sshKeyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SshKeyResp>}
     */
    this.sshKeyIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sshKeyIdGet");
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

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [SshKeyResp];

      return this.apiClient.callApi(
        '/ssh-key/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sshKeyMetadataIdGet operation.
     * @callback module:api/SSHKeyApi~sshKeyMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SshKeyResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get SSH key metadata
     * Retrieve the metadata of SSH key by the given ID. 
     * @param {String} id SSH key ID
     * @param {module:api/SSHKeyApi~sshKeyMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SshKeyResp}
     */
    this.sshKeyMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sshKeyMetadataIdGet");
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

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SshKeyResp;

      return this.apiClient.callApi(
        '/ssh-key/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
