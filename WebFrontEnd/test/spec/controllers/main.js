"use strict";

describe("Controller: MainCtrl", function() {
  // load the controller's module
  var Ctrl, $ControllerConstructor, scope, UserApi, User, $q, $rootScope;

  beforeEach(module("webFrontEndApp"));

  // beforeEach(function() {
  //   module(function($provide) {
  //     $provide.factory("UserApi", function() {
  //       debugger;
  //       return {
  //         query: function() {
  //           return {
  //             $
  //             deferred.resolve('Hello, ' + name + '!');
  //           };
  //         }
  //       };
  //     });
  //   });
  // });

  beforeEach(inject(function($controller) {
    $ControllerConstructor = $controller;
  }));

  beforeEach(inject(function(_$q_, _$rootScope_, _UserApi_, _User_) {
    UserApi = _UserApi_;
    User = _User_;
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));


  
  describe("activate ->", function() {
    it("should query the UserApi", function() {
      var spy = spyOn(UserApi, "query").and.callThrough();
      var Ctrl = $ControllerConstructor("MainCtrl", UserApi, User);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("activate ->", function() {
    it("Should test if true is true", function() {
      expect(true).toBe(true);
    });
  });
});
