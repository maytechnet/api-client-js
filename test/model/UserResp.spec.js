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
    instance = new QuatrixApi.UserResp();
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

  describe('UserResp', function() {
    it('should create an instance of UserResp', function() {
      expect(instance).to.be.a(QuatrixApi.UserResp);
    });

    it('should have the property id (base name: "id")', function() {
      expect(instance).to.have.property("id");
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      expect(instance).to.have.property("parent_id");
    });

    it('should have the property homeId (base name: "home_id")', function() {
      expect(instance).to.have.property("home_id");
    });

    it('should have the property homeName (base name: "home_name")', function() {
      expect(instance).to.have.property("home_name");
    });

    it('should have the property superAdmin (base name: "super_admin")', function() {
      expect(instance).to.have.property("super_admin");
    });

    it('should have the property name (base name: "name")', function() {
      expect(instance).to.have.property("name");
    });

    it('should have the property email (base name: "email")', function() {
      expect(instance).to.have.property("email");
    });

    it('should have the property status (base name: "status")', function() {
      expect(instance).to.have.property("status");
    });

    it('should have the property quota (base name: "quota")', function() {
      expect(instance).to.have.property("quota");
    });

    it('should have the property created (base name: "created")', function() {
      expect(instance).to.have.property("created");
    });

    it('should have the property modified (base name: "modified")', function() {
      expect(instance).to.have.property("modified");
    });

    it('should have the property groups (base name: "groups")', function() {
      expect(instance).to.have.property("groups");
    });

    it('should have the property userOperations (base name: "user_operations")', function() {
      expect(instance).to.have.property("user_operations");
    });

    it('should have the property effectiveOperations (base name: "effective_operations")', function() {
      expect(instance).to.have.property("effective_operations");
    });

    it('should have the property homeOperations (base name: "home_operations")', function() {
      expect(instance).to.have.property("home_operations");
    });

    it('should have the property language (base name: "language")', function() {
      expect(instance).to.have.property("language");
    });

    it('should have the property hasKey (base name: "has_key")', function() {
      expect(instance).to.have.property("has_key");
    });

    it('should have the property services (base name: "services")', function() {
      expect(instance).to.have.property("services");
    });

    it('should have the property uniqueLogin (base name: "unique_login")', function() {
      expect(instance).to.have.property("unique_login");
    });

    it('should have the property sftpLogin (base name: "sftp_login")', function() {
      expect(instance).to.have.property("sftp_login");
    });

    it('should have the property sftpHome (base name: "sftp_home")', function() {
      expect(instance).to.have.property("sftp_home");
    });

    it('should have the property readonly (base name: "readonly")', function() {
      expect(instance).to.have.property("readonly");
    });

    it('should have the property authMethods (base name: "auth_methods")', function() {
      expect(instance).to.have.property("auth_methods");
    });

    it('should have the property lastLogin (base name: "last_login")', function() {
      expect(instance).to.have.property("last_login");
    });

    it('should have the property storageUsed (base name: "storage_used")', function() {
      expect(instance).to.have.property("storage_used");
    });

    it('should have the property forcedAuth (base name: "forced_auth")', function() {
      expect(instance).to.have.property("forced_auth");
    });

  });

}));
