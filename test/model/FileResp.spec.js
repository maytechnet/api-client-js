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
    instance = new QuatrixApi.FileResp();
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

  describe('FileResp', function() {
    it('should create an instance of FileResp', function() {
      expect(instance).to.be.a(QuatrixApi.FileResp);
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance).to.have.property("id");
    });

    it('should have the property created (base name: "created")', function() {
      expect(instance).to.have.property("created");
    });

    it('should have the property modified (base name: "modified")', function() {
      expect(instance).to.have.property("modified");
    });

    it('should have the property name (base name: "name")', function() {
      expect(instance).to.have.property("name");
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      expect(instance).to.have.property("parent_id");
    });

    it('should have the property size (base name: "size")', function() {
      expect(instance).to.have.property("size");
    });

    it('should have the property modifiedMs (base name: "modified_ms")', function() {
      expect(instance).to.have.property("modified_ms");
    });

    it('should have the property type (base name: "type")', function() {
      expect(instance).to.have.property("type");
    });

    it('should have the property metadata (base name: "metadata")', function() {
      expect(instance).to.have.property("metadata");
    });

    it('should have the property operations (base name: "operations")', function() {
      expect(instance).to.have.property("operations");
    });

    it('should have the property subType (base name: "sub_type")', function() {
      expect(instance).to.have.property("sub_type");
    });

  });

}));
