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
    root.QuatrixApi.ShareRequestReq = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShareRequestReq model module.
   * @module model/ShareRequestReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShareRequestReq</code>.
   * @alias module:model/ShareRequestReq
   * @class
   * @param ids {Array.<String>} List of recipient IDs
   */
  var exports = function(ids) {
    var _this = this;



    _this['ids'] = ids;


  };

  /**
   * Constructs a <code>ShareRequestReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareRequestReq} obj Optional instance to populate.
   * @return {module:model/ShareRequestReq} The populated <code>ShareRequestReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('return_pgp_encrypted')) {
        obj['return_pgp_encrypted'] = ApiClient.convertToType(data['return_pgp_encrypted'], 'Boolean');
      }
      if (data.hasOwnProperty('send_email')) {
        obj['send_email'] = ApiClient.convertToType(data['send_email'], 'Boolean');
      }
      if (data.hasOwnProperty('ids')) {
        obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('folder_id')) {
        obj['folder_id'] = ApiClient.convertToType(data['folder_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * if PGP keys were generated by the sender or the recipient.
   * @member {Boolean} return_pgp_encrypted
   * @default false
   */
  exports.prototype['return_pgp_encrypted'] = false;
  /**
   * @member {Boolean} send_email
   * @default true
   */
  exports.prototype['send_email'] = true;
  /**
   * List of recipient IDs
   * @member {Array.<String>} ids
   */
  exports.prototype['ids'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Target folder ID for requested files
   * @member {String} folder_id
   */
  exports.prototype['folder_id'] = undefined;



  return exports;
}));

