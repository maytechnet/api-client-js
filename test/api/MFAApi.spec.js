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
    instance = new QuatrixApi.MFAApi();
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

  describe('MFAApi', function() {
    describe('profileRemoveMfaPost', function() {
      it('should call profileRemoveMfaPost successfully', function(done) {
        //uncomment below and update the code to test profileRemoveMfaPost
        //instance.profileRemoveMfaPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('profileSetMfaPost', function() {
      it('should call profileSetMfaPost successfully', function(done) {
        //uncomment below and update the code to test profileSetMfaPost
        //instance.profileSetMfaPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sessionLoginPost', function() {
      it('should call sessionLoginPost successfully', function(done) {
        //uncomment below and update the code to test sessionLoginPost
        //instance.sessionLoginPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userRemoveMfaPost', function() {
      it('should call userRemoveMfaPost successfully', function(done) {
        //uncomment below and update the code to test userRemoveMfaPost
        //instance.userRemoveMfaPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userResetMfaPost', function() {
      it('should call userResetMfaPost successfully', function(done) {
        //uncomment below and update the code to test userResetMfaPost
        //instance.userResetMfaPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userSetMfaPost', function() {
      it('should call userSetMfaPost successfully', function(done) {
        //uncomment below and update the code to test userSetMfaPost
        //instance.userSetMfaPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
