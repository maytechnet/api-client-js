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
    instance = new QuatrixApi.SettingsResp();
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

  describe('SettingsResp', function() {
    it('should create an instance of SettingsResp', function() {
      expect(instance).to.be.a(QuatrixApi.SettingsResp);
    });

    it('should have the property title (base name: "title")', function() {
      expect(instance).to.have.property("title");
    });

    it('should have the property bcc (base name: "bcc")', function() {
      expect(instance).to.have.property("bcc");
    });

    it('should have the property billingEmails (base name: "billing_emails")', function() {
      expect(instance).to.have.property("billing_emails");
    });

    it('should have the property emailFooter (base name: "email_footer")', function() {
      expect(instance).to.have.property("email_footer");
    });

    it('should have the property modified (base name: "modified")', function() {
      expect(instance).to.have.property("modified");
    });

    it('should have the property language (base name: "language")', function() {
      expect(instance).to.have.property("language");
    });

    it('should have the property pgpEnabled (base name: "pgp_enabled")', function() {
      expect(instance).to.have.property("pgp_enabled");
    });

    it('should have the property shareTypes (base name: "share_types")', function() {
      expect(instance).to.have.property("share_types");
    });

  });

}));
