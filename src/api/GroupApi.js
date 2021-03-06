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
    define(['ApiClient', 'model/ErrorModel', 'model/Group', 'model/GroupResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/Group'), require('../model/GroupResp'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.GroupApi = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ErrorModel, root.QuatrixApi.Group, root.QuatrixApi.GroupResp);
  }
}(this, function(ApiClient, ErrorModel, Group, GroupResp) {
  'use strict';

  /**
   * Group service.
   * @module api/GroupApi
   * @version 1.0.0
   */

  /**
   * Constructs a new GroupApi. 
   * @alias module:api/GroupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contactGroupGet operation.
     * @callback module:api/GroupApi~contactGroupGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available contact groups.
     * Get a list of available contact groups. 
     * @param {module:api/GroupApi~contactGroupGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.contactGroupGet = function(callback) {
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
      var returnType = [Object];

      return this.apiClient.callApi(
        '/contact/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupGet operation.
     * @callback module:api/GroupApi~groupGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GroupResp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available user groups
     * Get a list of available contact groups. 
     * @param {module:api/GroupApi~groupGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GroupResp>}
     */
    this.groupGet = function(callback) {
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
      var returnType = [GroupResp];

      return this.apiClient.callApi(
        '/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupMetadataIdGet operation.
     * @callback module:api/GroupApi~groupMetadataIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group metadata
     * Retrieve information about the group by the specified group ID. 
     * @param {String} id ID of a group
     * @param {module:api/GroupApi~groupMetadataIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupResp}
     */
    this.groupMetadataIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupMetadataIdGet");
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
      var returnType = GroupResp;

      return this.apiClient.callApi(
        '/group/metadata/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGroupGet operation.
     * @callback module:api/GroupApi~userGroupGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all user groups
     * Retrieve a list of all user groups that can be set for users. 
     * @param {module:api/GroupApi~userGroupGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Group>}
     */
    this.userGroupGet = function(callback) {
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
      var returnType = [Group];

      return this.apiClient.callApi(
        '/user/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
