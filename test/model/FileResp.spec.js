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
