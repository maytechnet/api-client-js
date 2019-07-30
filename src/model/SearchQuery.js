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
    define(['ApiClient', 'model/StringSearchQueryElement', 'model/TagSearchQueryElement', 'model/TimestampSearchQueryElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StringSearchQueryElement'), require('./TagSearchQueryElement'), require('./TimestampSearchQueryElement'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.SearchQuery = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.StringSearchQueryElement, root.QuatrixApi.TagSearchQueryElement, root.QuatrixApi.TimestampSearchQueryElement);
  }
}(this, function(ApiClient, StringSearchQueryElement, TagSearchQueryElement, TimestampSearchQueryElement) {
  'use strict';




  /**
   * The SearchQuery model module.
   * @module model/SearchQuery
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SearchQuery</code>.
   * @alias module:model/SearchQuery
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SearchQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchQuery} obj Optional instance to populate.
   * @return {module:model/SearchQuery} The populated <code>SearchQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = TagSearchQueryElement.constructFromObject(data['tag']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = StringSearchQueryElement.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = TimestampSearchQueryElement.constructFromObject(data['created']);
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = TimestampSearchQueryElement.constructFromObject(data['modified']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TagSearchQueryElement} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {module:model/StringSearchQueryElement} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/TimestampSearchQueryElement} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {module:model/TimestampSearchQueryElement} modified
   */
  exports.prototype['modified'] = undefined;



  return exports;
}));

