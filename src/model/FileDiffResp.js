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
    define(['ApiClient', 'model/FileDiffRespData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileDiffRespData'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.FileDiffResp = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.FileDiffRespData);
  }
}(this, function(ApiClient, FileDiffRespData) {
  'use strict';




  /**
   * The FileDiffResp model module.
   * @module model/FileDiffResp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FileDiffResp</code>.
   * @alias module:model/FileDiffResp
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FileDiffResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileDiffResp} obj Optional instance to populate.
   * @return {module:model/FileDiffResp} The populated <code>FileDiffResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Number');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [FileDiffRespData]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Number} to
   */
  exports.prototype['to'] = undefined;
  /**
   * @member {Array.<module:model/FileDiffRespData>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


