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
    instance = new QuatrixApi.ShareApi();
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

  describe('ShareApi', function() {
    describe('filesReturnMakedirIdPost', function() {
      it('should call filesReturnMakedirIdPost successfully', function(done) {
        //uncomment below and update the code to test filesReturnMakedirIdPost
        //instance.filesReturnMakedirIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesReturnMetadataIdGet', function() {
      it('should call filesReturnMetadataIdGet successfully', function(done) {
        //uncomment below and update the code to test filesReturnMetadataIdGet
        //instance.filesReturnMetadataIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesReturnSendPost', function() {
      it('should call filesReturnSendPost successfully', function(done) {
        //uncomment below and update the code to test filesReturnSendPost
        //instance.filesReturnSendPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filesReturnUploadLinkIdPost', function() {
      it('should call filesReturnUploadLinkIdPost successfully', function(done) {
        //uncomment below and update the code to test filesReturnUploadLinkIdPost
        //instance.filesReturnUploadLinkIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quicklinkCreatePost', function() {
      it('should call quicklinkCreatePost successfully', function(done) {
        //uncomment below and update the code to test quicklinkCreatePost
        //instance.quicklinkCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quicklinkLoginPinPost', function() {
      it('should call quicklinkLoginPinPost successfully', function(done) {
        //uncomment below and update the code to test quicklinkLoginPinPost
        //instance.quicklinkLoginPinPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quicklinkRevokeIdGet', function() {
      it('should call quicklinkRevokeIdGet successfully', function(done) {
        //uncomment below and update the code to test quicklinkRevokeIdGet
        //instance.quicklinkRevokeIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareCreatePost', function() {
      it('should call shareCreatePost successfully', function(done) {
        //uncomment below and update the code to test shareCreatePost
        //instance.shareCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareDownloadIdGet', function() {
      it('should call shareDownloadIdGet successfully', function(done) {
        //uncomment below and update the code to test shareDownloadIdGet
        //instance.shareDownloadIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareDownloadInfoIdGet', function() {
      it('should call shareDownloadInfoIdGet successfully', function(done) {
        //uncomment below and update the code to test shareDownloadInfoIdGet
        //instance.shareDownloadInfoIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareDownloadLinkIdGet', function() {
      it('should call shareDownloadLinkIdGet successfully', function(done) {
        //uncomment below and update the code to test shareDownloadLinkIdGet
        //instance.shareDownloadLinkIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareDownloadLinkIdPost', function() {
      it('should call shareDownloadLinkIdPost successfully', function(done) {
        //uncomment below and update the code to test shareDownloadLinkIdPost
        //instance.shareDownloadLinkIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareFilesIdGet', function() {
      it('should call shareFilesIdGet successfully', function(done) {
        //uncomment below and update the code to test shareFilesIdGet
        //instance.shareFilesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareLoginPinPost', function() {
      it('should call shareLoginPinPost successfully', function(done) {
        //uncomment below and update the code to test shareLoginPinPost
        //instance.shareLoginPinPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sharePreviewIdGet', function() {
      it('should call sharePreviewIdGet successfully', function(done) {
        //uncomment below and update the code to test sharePreviewIdGet
        //instance.sharePreviewIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareRecipientsGet', function() {
      it('should call shareRecipientsGet successfully', function(done) {
        //uncomment below and update the code to test shareRecipientsGet
        //instance.shareRecipientsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareRequestPost', function() {
      it('should call shareRequestPost successfully', function(done) {
        //uncomment below and update the code to test shareRequestPost
        //instance.shareRequestPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareRevokeIdGet', function() {
      it('should call shareRevokeIdGet successfully', function(done) {
        //uncomment below and update the code to test shareRevokeIdGet
        //instance.shareRevokeIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shareSendRequestIdPost', function() {
      it('should call shareSendRequestIdPost successfully', function(done) {
        //uncomment below and update the code to test shareSendRequestIdPost
        //instance.shareSendRequestIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackingGet', function() {
      it('should call trackingGet successfully', function(done) {
        //uncomment below and update the code to test trackingGet
        //instance.trackingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('trackingIdGet', function() {
      it('should call trackingIdGet successfully', function(done) {
        //uncomment below and update the code to test trackingIdGet
        //instance.trackingIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));