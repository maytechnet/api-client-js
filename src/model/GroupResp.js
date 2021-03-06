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
    define(['ApiClient', 'model/GroupMetadata', 'model/IdName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupMetadata'), require('./IdName'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.GroupResp = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.GroupMetadata, root.QuatrixApi.IdName);
  }
}(this, function(ApiClient, GroupMetadata, IdName) {
  'use strict';




  /**
   * The GroupResp model module.
   * @module model/GroupResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GroupResp</code>.
   * @alias module:model/GroupResp
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>GroupResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupResp} obj Optional instance to populate.
   * @return {module:model/GroupResp} The populated <code>GroupResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
      }
      if (data.hasOwnProperty('parent_name')) {
        obj['parent_name'] = ApiClient.convertToType(data['parent_name'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('operations')) {
        obj['operations'] = ApiClient.convertToType(data['operations'], 'Number');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [IdName]);
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [IdName]);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = GroupMetadata.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * @member {String} parent_name
   */
  exports.prototype['parent_name'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} operations
   */
  exports.prototype['operations'] = undefined;
  /**
   * @member {Array.<module:model/IdName>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {Array.<module:model/IdName>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {module:model/GroupMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


