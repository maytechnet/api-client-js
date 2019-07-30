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
    define(['ApiClient', 'model/UserPermissionReq'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserPermissionReq'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.PfcreateReq = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.UserPermissionReq);
  }
}(this, function(ApiClient, UserPermissionReq) {
  'use strict';




  /**
   * The PfcreateReq model module.
   * @module model/PfcreateReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PfcreateReq</code>.
   * @alias module:model/PfcreateReq
   * @class
   * @param name {String} 
   * @param fileId {String} 
   * @param usersPermissions {Array.<module:model/UserPermissionReq>} 
   */
  var exports = function(name, fileId, usersPermissions) {
    var _this = this;


    _this['name'] = name;
    _this['file_id'] = fileId;
    _this['users_permissions'] = usersPermissions;

  };

  /**
   * Constructs a <code>PfcreateReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PfcreateReq} obj Optional instance to populate.
   * @return {module:model/PfcreateReq} The populated <code>PfcreateReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('file_id')) {
        obj['file_id'] = ApiClient.convertToType(data['file_id'], 'String');
      }
      if (data.hasOwnProperty('users_permissions')) {
        obj['users_permissions'] = ApiClient.convertToType(data['users_permissions'], [UserPermissionReq]);
      }
      if (data.hasOwnProperty('notify')) {
        obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} file_id
   */
  exports.prototype['file_id'] = undefined;
  /**
   * @member {Array.<module:model/UserPermissionReq>} users_permissions
   */
  exports.prototype['users_permissions'] = undefined;
  /**
   * @member {Boolean} notify
   * @default false
   */
  exports.prototype['notify'] = false;



  return exports;
}));

