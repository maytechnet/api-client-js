/**
 * Quatrix API
 * The Quatrix API enables you to automate your interaction with Quatrix using any scripting or programming language. You can test API calls on [Swagger](https://docs.maytech.net/swagger/), the interactive environment we use as the repository for the Quatrix API. In order to authorize to Quatrix API you will need to have a Quatrix account https://yourcompanyname.quatrix.it/ (e.g. https://test-api.quatrix.it/). You can set up a free trial account [here](https://www.maytech.net/freetrial.html#trial=qtrx). Below you'll find information on how to authenticate in a Quatrix session, how to construct JSON formatted API call and what JSON responses to expect.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GroupMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.QuatrixApi) {
      root.QuatrixApi = {};
    }
    root.QuatrixApi.Group = factory(root.QuatrixApi.ApiClient, root.QuatrixApi.GroupMetadata);
  }
}(this, function(ApiClient, GroupMetadata) {
  'use strict';




  /**
   * The Group model module.
   * @module model/Group
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = GroupMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/GroupMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


