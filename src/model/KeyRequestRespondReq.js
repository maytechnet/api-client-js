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
    root.QuatrixApi.KeyRequestRespondReq = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The KeyRequestRespondReq model module.
   * @module model/KeyRequestRespondReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KeyRequestRespondReq</code>.
   * @alias module:model/KeyRequestRespondReq
   * @class
   * @param name {String} 
   * @param _public {String} 
   */
  var exports = function(name, _public) {
    var _this = this;

    _this['name'] = name;
    _this['public'] = _public;

  };

  /**
   * Constructs a <code>KeyRequestRespondReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeyRequestRespondReq} obj Optional instance to populate.
   * @return {module:model/KeyRequestRespondReq} The populated <code>KeyRequestRespondReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'String');
      }
      if (data.hasOwnProperty('private')) {
        obj['private'] = ApiClient.convertToType(data['private'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} public
   */
  exports.prototype['public'] = undefined;
  /**
   * @member {String} private
   */
  exports.prototype['private'] = undefined;



  return exports;
}));


