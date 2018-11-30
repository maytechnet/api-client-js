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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QuatrixApi);
  }
}(this, function(expect, QuatrixApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QuatrixApi.AutomationResp();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AutomationResp', function() {
    it('should create an instance of AutomationResp', function() {
      expect(instance).to.be.a(QuatrixApi.AutomationResp);
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance).to.have.property("id");
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      expect(instance).to.have.property("owner_id");
    });

    it('should have the property fileId (base name: "file_id")', function() {
      expect(instance).to.have.property("file_id");
    });

    it('should have the property created (base name: "created")', function() {
      expect(instance).to.have.property("created");
    });

    it('should have the property modified (base name: "modified")', function() {
      expect(instance).to.have.property("modified");
    });

    it('should have the property status (base name: "status")', function() {
      expect(instance).to.have.property("status");
    });

    it('should have the property action (base name: "action")', function() {
      expect(instance).to.have.property("action");
    });

    it('should have the property options (base name: "options")', function() {
      expect(instance).to.have.property("options");
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance).to.have.property("email");
    });

    it('should have the property filePath (base name: "file_path")', function() {
      expect(instance).to.have.property("file_path");
    });

    it('should have the property ruleNum (base name: "rule_num")', function() {
      expect(instance).to.have.property("rule_num");
    });

  });

}));
