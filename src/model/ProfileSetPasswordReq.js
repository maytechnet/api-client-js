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
    root.QuatrixApi.ProfileSetPasswordReq = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProfileSetPasswordReq model module.
   * @module model/ProfileSetPasswordReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProfileSetPasswordReq</code>.
   * @alias module:model/ProfileSetPasswordReq
   * @class
   * @param password {String} current password in base64
   * @param newPassword {String} new password in base64
   */
  var exports = function(password, newPassword) {
    var _this = this;

    _this['password'] = password;
    _this['new_password'] = newPassword;
  };

  /**
   * Constructs a <code>ProfileSetPasswordReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileSetPasswordReq} obj Optional instance to populate.
   * @return {module:model/ProfileSetPasswordReq} The populated <code>ProfileSetPasswordReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('new_password')) {
        obj['new_password'] = ApiClient.convertToType(data['new_password'], 'String');
      }
    }
    return obj;
  }

  /**
   * current password in base64
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * new password in base64
   * @member {String} new_password
   */
  exports.prototype['new_password'] = undefined;



  return exports;
}));

