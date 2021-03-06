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
    instance = new QuatrixApi.AutomationEditReq();
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

  describe('AutomationEditReq', function() {
    it('should create an instance of AutomationEditReq', function() {
      expect(instance).to.be.a(QuatrixApi.AutomationEditReq);
    });

    it('should have the property ids (base name: "ids")', function() {
      expect(instance).to.have.property("ids");
    });

    it('should have the property action (base name: "action")', function() {
      expect(instance).to.have.property("action");
    });

    it('should have the property fileId (base name: "file_id")', function() {
      expect(instance).to.have.property("file_id");
    });

    it('should have the property status (base name: "status")', function() {
      expect(instance).to.have.property("status");
    });

    it('should have the property options (base name: "options")', function() {
      expect(instance).to.have.property("options");
    });

    it('should have the property comment (base name: "comment")', function() {
      expect(instance).to.have.property("comment");
    });

    it('should have the property expires (base name: "expires")', function() {
      expect(instance).to.have.property("expires");
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance).to.have.property("email");
    });

  });

}));
