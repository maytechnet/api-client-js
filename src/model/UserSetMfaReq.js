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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.UserSetMfaReq = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserSetMfaReq model module.
   * @module model/UserSetMfaReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserSetMfaReq</code>.
   * @alias module:model/UserSetMfaReq
   * @class
   * @param ids {Array.<String>} 
   * @param authType {module:model/UserSetMfaReq.AuthTypeEnum} 
   * @param code {String} Auth code for MFA
   */
  var exports = function(ids, authType, code) {
    var _this = this;

    _this['ids'] = ids;
    _this['auth_type'] = authType;
    _this['code'] = code;
  };

  /**
   * Constructs a <code>UserSetMfaReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSetMfaReq} obj Optional instance to populate.
   * @return {module:model/UserSetMfaReq} The populated <code>UserSetMfaReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ids')) {
        obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
      }
      if (data.hasOwnProperty('auth_type')) {
        obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} ids
   */
  exports.prototype['ids'] = undefined;
  /**
   * @member {module:model/UserSetMfaReq.AuthTypeEnum} auth_type
   */
  exports.prototype['auth_type'] = undefined;
  /**
   * Auth code for MFA
   * @member {String} code
   */
  exports.prototype['code'] = undefined;


  /**
   * Allowed values for the <code>auth_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthTypeEnum = {
    /**
     * value: "2FA"
     * @const
     */
    "2FA": "2FA",
    /**
     * value: "PIN"
     * @const
     */
    "PIN": "PIN"  };


  return exports;
}));


