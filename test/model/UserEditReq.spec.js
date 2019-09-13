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
    instance = new QuatrixApi.UserEditReq();
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

  describe('UserEditReq', function() {
    it('should create an instance of UserEditReq', function() {
      expect(instance).to.be.a(QuatrixApi.UserEditReq);
    });

    it('should have the property ids (base name: "ids")', function() {
      expect(instance).to.have.property("ids");
    });

    it('should have the property name (base name: "name")', function() {
      expect(instance).to.have.property("name");
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance).to.have.property("email");
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      expect(instance).to.have.property("parent_id");
    });

    it('should have the property quota (base name: "quota")', function() {
      expect(instance).to.have.property("quota");
    });

    it('should have the property status (base name: "status")', function() {
      expect(instance).to.have.property("status");
    });

    it('should have the property superAdmin (base name: "super_admin")', function() {
      expect(instance).to.have.property("super_admin");
    });

    it('should have the property homeId (base name: "home_id")', function() {
      expect(instance).to.have.property("home_id");
    });

    it('should have the property userOperations (base name: "user_operations")', function() {
      expect(instance).to.have.property("user_operations");
    });

    it('should have the property homeOperations (base name: "home_operations")', function() {
      expect(instance).to.have.property("home_operations");
    });

    it('should have the property language (base name: "language")', function() {
      expect(instance).to.have.property("language");
    });

    it('should have the property groups (base name: "groups")', function() {
      expect(instance).to.have.property("groups");
    });

    it('should have the property services (base name: "services")', function() {
      expect(instance).to.have.property("services");
    });

    it('should have the property sftpLogin (base name: "sftp_login")', function() {
      expect(instance).to.have.property("sftp_login");
    });

  });

}));
