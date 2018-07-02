"use strict";

describe("Controller: MainCtrl", function() {
  // load the controller's module
  var Ctrl, $ControllerConstructor, scope, UserApi, User, $q, $rootScope, spy;

  beforeEach(module("webFrontEndApp"));

  beforeEach(function() {
    UserApi = {
      query: function() {
        return {
          $promise: {
            then: function() {
              return {
                catch: function() {
                  return {
                    finally: function() {}
                  };
                }
              };
            }
          }
        };
      }
    };
    
    module(function($provide) {
      $provide.value("UserApi", UserApi);
    });
  });

  beforeEach(inject(function(
    $controller,
    _$q_,
    _$rootScope_,
    _User_,
    _UserApi_
  ) {
    User = _User_;
    UserApi = _UserApi_;
    $q = _$q_;
    $ControllerConstructor = $controller;
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
  }));

  describe("activate ->", function() {
    it("should query the UserApi", inject(function($httpBackend) {
      // Arrange
      $httpBackend.whenGET("/Names").respond([{}]);
      $httpBackend.whenGET("views/main.html").respond({});
      spy = spyOn(UserApi, "query").and.callThrough();

      Ctrl = $ControllerConstructor("MainCtrl", UserApi, User);

      debugger;
      scope.$apply();

      // Act

      // Assert
      expect(spy).toHaveBeenCalled();
    }));
  });
});
