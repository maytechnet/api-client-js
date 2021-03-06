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
    define(['ApiClient', 'model/ProjectOwner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectOwner'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.ProjectFoldersListRespItem = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ProjectOwner);
  }
}(this, function(ApiClient, ProjectOwner) {
  'use strict';




  /**
   * The ProjectFoldersListRespItem model module.
   * @module model/ProjectFoldersListRespItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProjectFoldersListRespItem</code>.
   * @alias module:model/ProjectFoldersListRespItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ProjectFoldersListRespItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectFoldersListRespItem} obj Optional instance to populate.
   * @return {module:model/ProjectFoldersListRespItem} The populated <code>ProjectFoldersListRespItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ProjectOwner.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('project_id')) {
        obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
      }
      if (data.hasOwnProperty('ctime')) {
        obj['ctime'] = ApiClient.convertToType(data['ctime'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('file_id')) {
        obj['file_id'] = ApiClient.convertToType(data['file_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProjectOwner} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {String} project_id
   */
  exports.prototype['project_id'] = undefined;
  /**
   * @member {Number} ctime
   */
  exports.prototype['ctime'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} file_id
   */
  exports.prototype['file_id'] = undefined;



  return exports;
}));


