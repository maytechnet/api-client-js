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
    define(['ApiClient', 'model/ProfileRespShareTypes', 'model/ShortUserService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProfileRespShareTypes'), require('./ShortUserService'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.ProfileResp = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.ProfileRespShareTypes, root.QuatrixApi.ShortUserService);
  }
}(this, function(ApiClient, ProfileRespShareTypes, ShortUserService) {
  'use strict';




  /**
   * The ProfileResp model module.
   * @module model/ProfileResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProfileResp</code>.
   * @alias module:model/ProfileResp
   * @class
   */
  var exports = function() {
    var _this = this;


































  };

  /**
   * Constructs a <code>ProfileResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileResp} obj Optional instance to populate.
   * @return {module:model/ProfileResp} The populated <code>ProfileResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('super_admin')) {
        obj['super_admin'] = ApiClient.convertToType(data['super_admin'], 'String');
      }
      if (data.hasOwnProperty('home_id')) {
        obj['home_id'] = ApiClient.convertToType(data['home_id'], 'String');
      }
      if (data.hasOwnProperty('operations')) {
        obj['operations'] = ApiClient.convertToType(data['operations'], 'Number');
      }
      if (data.hasOwnProperty('max_file_size')) {
        obj['max_file_size'] = ApiClient.convertToType(data['max_file_size'], 'Number');
      }
      if (data.hasOwnProperty('max_files_per_share')) {
        obj['max_files_per_share'] = ApiClient.convertToType(data['max_files_per_share'], 'Number');
      }
      if (data.hasOwnProperty('plan')) {
        obj['plan'] = ApiClient.convertToType(data['plan'], 'String');
      }
      if (data.hasOwnProperty('is_contact')) {
        obj['is_contact'] = ApiClient.convertToType(data['is_contact'], 'Boolean');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('channel_id')) {
        obj['channel_id'] = ApiClient.convertToType(data['channel_id'], 'String');
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('storage_id')) {
        obj['storage_id'] = ApiClient.convertToType(data['storage_id'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Number');
      }
      if (data.hasOwnProperty('quota')) {
        obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Number');
      }
      if (data.hasOwnProperty('gid')) {
        obj['gid'] = ApiClient.convertToType(data['gid'], 'Number');
      }
      if (data.hasOwnProperty('has_key')) {
        obj['has_key'] = ApiClient.convertToType(data['has_key'], 'Boolean');
      }
      if (data.hasOwnProperty('pgp_enabled')) {
        obj['pgp_enabled'] = ApiClient.convertToType(data['pgp_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('message_signature')) {
        obj['message_signature'] = ApiClient.convertToType(data['message_signature'], 'String');
      }
      if (data.hasOwnProperty('outgoing_id')) {
        obj['outgoing_id'] = ApiClient.convertToType(data['outgoing_id'], 'String');
      }
      if (data.hasOwnProperty('incoming_id')) {
        obj['incoming_id'] = ApiClient.convertToType(data['incoming_id'], 'String');
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], [ShortUserService]);
      }
      if (data.hasOwnProperty('share_types')) {
        obj['share_types'] = ProfileRespShareTypes.constructFromObject(data['share_types']);
      }
      if (data.hasOwnProperty('unique_login')) {
        obj['unique_login'] = ApiClient.convertToType(data['unique_login'], 'String');
      }
      if (data.hasOwnProperty('sftp_login')) {
        obj['sftp_login'] = ApiClient.convertToType(data['sftp_login'], 'String');
      }
      if (data.hasOwnProperty('auth_methods')) {
        obj['auth_methods'] = ApiClient.convertToType(data['auth_methods'], ['String']);
      }
      if (data.hasOwnProperty('account_status')) {
        obj['account_status'] = ApiClient.convertToType(data['account_status'], 'String');
      }
      if (data.hasOwnProperty('sftp_url')) {
        obj['sftp_url'] = ApiClient.convertToType(data['sftp_url'], 'String');
      }
      if (data.hasOwnProperty('forced_auth')) {
        obj['forced_auth'] = ApiClient.convertToType(data['forced_auth'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} super_admin
   */
  exports.prototype['super_admin'] = undefined;
  /**
   * @member {String} home_id
   */
  exports.prototype['home_id'] = undefined;
  /**
   * @member {Number} operations
   */
  exports.prototype['operations'] = undefined;
  /**
   * @member {Number} max_file_size
   */
  exports.prototype['max_file_size'] = undefined;
  /**
   * @member {Number} max_files_per_share
   */
  exports.prototype['max_files_per_share'] = undefined;
  /**
   * @member {String} plan
   */
  exports.prototype['plan'] = undefined;
  /**
   * @member {Boolean} is_contact
   */
  exports.prototype['is_contact'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {String} channel_id
   */
  exports.prototype['channel_id'] = undefined;
  /**
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {String} storage_id
   */
  exports.prototype['storage_id'] = undefined;
  /**
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Number} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * @member {Number} quota
   */
  exports.prototype['quota'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {Number} gid
   */
  exports.prototype['gid'] = undefined;
  /**
   * @member {Boolean} has_key
   */
  exports.prototype['has_key'] = undefined;
  /**
   * @member {Boolean} pgp_enabled
   */
  exports.prototype['pgp_enabled'] = undefined;
  /**
   * @member {String} message_signature
   */
  exports.prototype['message_signature'] = undefined;
  /**
   * @member {String} outgoing_id
   */
  exports.prototype['outgoing_id'] = undefined;
  /**
   * @member {String} incoming_id
   */
  exports.prototype['incoming_id'] = undefined;
  /**
   * @member {Array.<module:model/ShortUserService>} services
   */
  exports.prototype['services'] = undefined;
  /**
   * @member {module:model/ProfileRespShareTypes} share_types
   */
  exports.prototype['share_types'] = undefined;
  /**
   * @member {String} unique_login
   */
  exports.prototype['unique_login'] = undefined;
  /**
   * @member {String} sftp_login
   */
  exports.prototype['sftp_login'] = undefined;
  /**
   * @member {Array.<String>} auth_methods
   */
  exports.prototype['auth_methods'] = undefined;
  /**
   * @member {module:model/ProfileResp.AccountStatusEnum} account_status
   */
  exports.prototype['account_status'] = undefined;
  /**
   * @member {String} sftp_url
   */
  exports.prototype['sftp_url'] = undefined;
  /**
   * @member {Array.<String>} forced_auth
   */
  exports.prototype['forced_auth'] = undefined;


  /**
   * Allowed values for the <code>account_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountStatusEnum = {
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "S"
     * @const
     */
    "S": "S"  };


  return exports;
}));


