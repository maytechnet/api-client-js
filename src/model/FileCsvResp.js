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
    root.QuatrixApi.FileCsvResp = factory(root.QuatrixApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileCsvResp model module.
   * @module model/FileCsvResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FileCsvResp</code>.
   * File content
   * @alias module:model/FileCsvResp
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>FileCsvResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileCsvResp} obj Optional instance to populate.
   * @return {module:model/FileCsvResp} The populated <code>FileCsvResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Size')) {
        obj['Size'] = ApiClient.convertToType(data['Size'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('Created')) {
        obj['Created'] = ApiClient.convertToType(data['Created'], 'String');
      }
      if (data.hasOwnProperty('Modified')) {
        obj['Modified'] = ApiClient.convertToType(data['Modified'], 'String');
      }
      if (data.hasOwnProperty('Content_modified')) {
        obj['Content_modified'] = ApiClient.convertToType(data['Content_modified'], 'String');
      }
      if (data.hasOwnProperty('Created_by')) {
        obj['Created_by'] = ApiClient.convertToType(data['Created_by'], Object);
      }
      if (data.hasOwnProperty('Owner')) {
        obj['Owner'] = ApiClient.convertToType(data['Owner'], Object);
      }
    }
    return obj;
  }

  /**
   * File Path
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * File name
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * File Size
   * @member {Number} Size
   */
  exports.prototype['Size'] = undefined;
  /**
   * File Type (F-file, D-directory, T-trash)
   * @member {module:model/FileCsvResp.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * File creation time
   * @member {String} Created
   */
  exports.prototype['Created'] = undefined;
  /**
   * File modification time
   * @member {String} Modified
   */
  exports.prototype['Modified'] = undefined;
  /**
   * File content modification time
   * @member {String} Content_modified
   */
  exports.prototype['Content_modified'] = undefined;
  /**
   * Who created a file
   * @member {Object} Created_by
   */
  exports.prototype['Created_by'] = undefined;
  /**
   * Who owns a file
   * @member {Object} Owner
   */
  exports.prototype['Owner'] = undefined;


  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "D"
     * @const
     */
    "D": "D",
    /**
     * value: "F"
     * @const
     */
    "F": "F",
    /**
     * value: "T"
     * @const
     */
    "T": "T"  };


  return exports;
}));


