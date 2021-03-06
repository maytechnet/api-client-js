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
    root.QuatrixApi.ShareCreateReq = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ShareCreateReq model module.
   * @module model/ShareCreateReq
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ShareCreateReq</code>.
   * @alias module:model/ShareCreateReq
   * @class
   * @param folderId {String} 
   * @param files {Array.<String>} 
   * @param contacts {Array.<String>} 
   */
  var exports = function(folderId, files, contacts) {
    var _this = this;

    _this['folder_id'] = folderId;
    _this['files'] = files;
    _this['contacts'] = contacts;













  };

  /**
   * Constructs a <code>ShareCreateReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShareCreateReq} obj Optional instance to populate.
   * @return {module:model/ShareCreateReq} The populated <code>ShareCreateReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('folder_id')) {
        obj['folder_id'] = ApiClient.convertToType(data['folder_id'], 'String');
      }
      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], ['String']);
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], ['String']);
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
      }
      if (data.hasOwnProperty('activates')) {
        obj['activates'] = ApiClient.convertToType(data['activates'], 'Number');
      }
      if (data.hasOwnProperty('return_files')) {
        obj['return_files'] = ApiClient.convertToType(data['return_files'], 'Boolean');
      }
      if (data.hasOwnProperty('request_auth')) {
        obj['request_auth'] = ApiClient.convertToType(data['request_auth'], 'Boolean');
      }
      if (data.hasOwnProperty('pgp_encrypted')) {
        obj['pgp_encrypted'] = ApiClient.convertToType(data['pgp_encrypted'], 'Boolean');
      }
      if (data.hasOwnProperty('return_pgp_encrypted')) {
        obj['return_pgp_encrypted'] = ApiClient.convertToType(data['return_pgp_encrypted'], 'Boolean');
      }
      if (data.hasOwnProperty('message_signature')) {
        obj['message_signature'] = ApiClient.convertToType(data['message_signature'], 'String');
      }
      if (data.hasOwnProperty('notify')) {
        obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
      }
      if (data.hasOwnProperty('share_type')) {
        obj['share_type'] = ApiClient.convertToType(data['share_type'], 'String');
      }
      if (data.hasOwnProperty('pin')) {
        obj['pin'] = ApiClient.convertToType(data['pin'], 'String');
      }
      if (data.hasOwnProperty('send_email')) {
        obj['send_email'] = ApiClient.convertToType(data['send_email'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} folder_id
   */
  exports.prototype['folder_id'] = undefined;
  /**
   * @member {Array.<String>} files
   */
  exports.prototype['files'] = undefined;
  /**
   * @member {Array.<String>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * it should be larger than the \"activates\" parameter.
   * @member {Number} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * @member {Number} activates
   */
  exports.prototype['activates'] = undefined;
  /**
   * @member {Boolean} return_files
   */
  exports.prototype['return_files'] = undefined;
  /**
   * Defines if return files will require authentication for public share
   * @member {Boolean} request_auth
   * @default true
   */
  exports.prototype['request_auth'] = true;
  /**
   * for PGP encrypted shares PGP keys should be generated by the sender and the recipient. PGP encryption is disabled for public shares.
   * @member {Boolean} pgp_encrypted
   */
  exports.prototype['pgp_encrypted'] = undefined;
  /**
   * @member {Boolean} return_pgp_encrypted
   */
  exports.prototype['return_pgp_encrypted'] = undefined;
  /**
   * @member {String} message_signature
   */
  exports.prototype['message_signature'] = undefined;
  /**
   * @member {Boolean} notify
   */
  exports.prototype['notify'] = undefined;
  /**
   * @member {module:model/ShareCreateReq.ShareTypeEnum} share_type
   * @default 'T'
   */
  exports.prototype['share_type'] = 'T';
  /**
   * @member {String} pin
   */
  exports.prototype['pin'] = undefined;
  /**
   * create a share with sending an email or just create a share
   * @member {Boolean} send_email
   * @default false
   */
  exports.prototype['send_email'] = false;


  /**
   * Allowed values for the <code>share_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ShareTypeEnum = {
    /**
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "T"
     * @const
     */
    "T": "T",
    /**
     * value: "C"
     * @const
     */
    "C": "C"  };


  return exports;
}));


