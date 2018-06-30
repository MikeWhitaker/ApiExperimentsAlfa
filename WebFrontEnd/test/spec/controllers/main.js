"use strict";

describe("Controller: MainCtrl", function() {
  // load the controller's module
  var Ctrl, scope, MockUserApi, $q;
  
  beforeEach(module('webFrontEndApp'));

  
  beforeEach(inject(function(_$q_, _$rootScope_, ) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));
    
    
  beforeEach(inject(function($controller) {
    scope = $rootScope.$new();
    
    MockUserApi = {
      query: function () {
        queryDeferred = $q.defer();
        return { $promise: queryDeferred.promise };
      }
    }

    spyOn(MockUserApi, 'query').andCallThrough();
    
    $controller('Ctrl', {
      'UserApi': MockUserApi,
      'User': {}
    });
  }));
  
  describe('MockUserApi.query', function () {
    beforeEach(function () {
      queryDeferred.resolve(MockUserApi);
      $rootScope.$apply();
    })
    
    fit('should query the MockUserApi', function () {
      expect(MockUserApi.query).toHaveBeenCalled();
    });
  });
});
