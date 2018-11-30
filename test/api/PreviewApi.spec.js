/**
 * Quatrix API
 * File Transfer And Sharing API
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
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", "../../src/index", "sinon"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require("../../src/index"), require("sinon"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QuatrixApi, root.sinon);
  }
})(this, function(expect, QuatrixApi, sinon) {
  "use strict";

  var instance;

  beforeEach(function() {
    instance = new QuatrixApi.PreviewApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === "function") return object[getter]();
    else return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === "function") object[setter](value);
    else object[property] = value;
  };

  describe("PreviewApi", function() {
    describe("previewDocumentPdfIdGet", function() {
      it("should throw error if ids is missed", function() {
        expect(instance.previewDocumentPdfIdGet).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'id' when calling previewDocumentPdfIdGet"
          );
        });
      });

      it("should call previewDocumentPdfIdGet successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var id = "id";
        var callback = "callback";
        var result = instance.previewDocumentPdfIdGet(id, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/preview/document_pdf/{id}"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("GET");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({
          id: "id"
        });
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be(null);
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql(["image/png"]);
        expect(instance.apiClient.callApi.args[0][11]).to.be(null);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
    describe("previewImageIdGet", function() {
      it("should throw error if ids is missed", function() {
        expect(instance.previewImageIdGet).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'id' when calling previewImageIdGet"
          );
        });
      });

      it("should call previewImageIdGet successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var id = "id";
        var opts = {
          size: "size"
        };
        var callback = "callback";
        var result = instance.previewImageIdGet(id, opts, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/preview/image/{id}"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("GET");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({
          id: "id"
        });
        expect(instance.apiClient.callApi.args[0][3]).to.eql({
          size: "size"
        });
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be(null);
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql(["image/png"]);
        expect(instance.apiClient.callApi.args[0][11]).to.be(null);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
    describe("previewVideoIdGet", function() {
      it("should throw error if ids is missed", function() {
        expect(instance.previewVideoIdGet).to.throwException(function(e) {
          expect(e.message).to.be.equal(
            "Missing the required parameter 'id' when calling previewVideoIdGet"
          );
        });
      });

      it("should call previewVideoIdGet successfully", function() {
        instance.apiClient.callApi = sinon.stub().returns("result");
        var id = "id";
        var callback = "callback";
        var result = instance.previewVideoIdGet(id, callback);
        expect(result).to.be.equal("result");
        expect(instance.apiClient.callApi.calledOnce).to.be(true);
        expect(instance.apiClient.callApi.args[0][0]).to.be.equal(
          "/preview/video/{id}"
        );
        expect(instance.apiClient.callApi.args[0][1]).to.be.equal("GET");
        expect(instance.apiClient.callApi.args[0][2]).to.eql({
          id: "id"
        });
        expect(instance.apiClient.callApi.args[0][3]).to.eql({});
        expect(instance.apiClient.callApi.args[0][4]).to.eql({});
        expect(instance.apiClient.callApi.args[0][5]).to.eql({});
        expect(instance.apiClient.callApi.args[0][6]).to.eql({});
        expect(instance.apiClient.callApi.args[0][7]).to.be(null);
        expect(instance.apiClient.callApi.args[0][8]).to.eql(["api_key"]);
        expect(instance.apiClient.callApi.args[0][9]).to.eql([
          "application/json"
        ]);
        expect(instance.apiClient.callApi.args[0][10]).to.eql(["image/mp4"]);
        expect(instance.apiClient.callApi.args[0][11]).to.be(null);
        expect(instance.apiClient.callApi.args[0][12]).to.be.equal("callback");
      });
    });
  });
});
