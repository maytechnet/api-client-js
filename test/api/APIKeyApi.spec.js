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
    instance = new QuatrixApi.APIKeyApi();
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

  describe('APIKeyApi', function() {
    describe('apiKeyCreatePost', function() {
      it('should call apiKeyCreatePost successfully', function(done) {
        //uncomment below and update the code to test apiKeyCreatePost
        //instance.apiKeyCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiKeyDeleteIdGet', function() {
      it('should call apiKeyDeleteIdGet successfully', function(done) {
        //uncomment below and update the code to test apiKeyDeleteIdGet
        //instance.apiKeyDeleteIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiKeyGet', function() {
      it('should call apiKeyGet successfully', function(done) {
        //uncomment below and update the code to test apiKeyGet
        //instance.apiKeyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiKeyIdGet', function() {
      it('should call apiKeyIdGet successfully', function(done) {
        //uncomment below and update the code to test apiKeyIdGet
        //instance.apiKeyIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiKeyMetadataIdGet', function() {
      it('should call apiKeyMetadataIdGet successfully', function(done) {
        //uncomment below and update the code to test apiKeyMetadataIdGet
        //instance.apiKeyMetadataIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiKeyUpdateIdPost', function() {
      it('should call apiKeyUpdateIdPost successfully', function(done) {
        //uncomment below and update the code to test apiKeyUpdateIdPost
        //instance.apiKeyUpdateIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
