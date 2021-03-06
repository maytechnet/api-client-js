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
    define(['ApiClient', 'model/AutomationOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutomationOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.AutomationResp = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.AutomationOptions);
  }
}(this, function(ApiClient, AutomationOptions) {
  'use strict';




  /**
   * The AutomationResp model module.
   * @module model/AutomationResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AutomationResp</code>.
   * @alias module:model/AutomationResp
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>AutomationResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutomationResp} obj Optional instance to populate.
   * @return {module:model/AutomationResp} The populated <code>AutomationResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('owner_id')) {
        obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
      }
      if (data.hasOwnProperty('file_id')) {
        obj['file_id'] = ApiClient.convertToType(data['file_id'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = AutomationOptions.constructFromObject(data['options']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], ['String']);
      }
      if (data.hasOwnProperty('file_path')) {
        obj['file_path'] = ApiClient.convertToType(data['file_path'], 'String');
      }
      if (data.hasOwnProperty('rule_num')) {
        obj['rule_num'] = ApiClient.convertToType(data['rule_num'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} owner_id
   */
  exports.prototype['owner_id'] = undefined;
  /**
   * @member {String} file_id
   */
  exports.prototype['file_id'] = undefined;
  /**
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Number} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * @member {module:model/AutomationResp.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/AutomationResp.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {module:model/AutomationOptions} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {Array.<String>} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} file_path
   */
  exports.prototype['file_path'] = undefined;
  /**
   * @member {Number} rule_num
   */
  exports.prototype['rule_num'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "D"
     * @const
     */
    "D": "D"  };

  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "autodelete"
     * @const
     */
    "autodelete": "autodelete"  };


  return exports;
}));


