'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:childListApp
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('childListApp')
    .controller('FamilyDataCtrl', function ($scope, familyservice) {
        var vm = this;

        $scope.familyData = familyservice.query();
        $scope.familyData.$promise.then(function (result) {
            $scope.familyData = result;
            console.log('isArray: ' + angular.isArray($scope.familyData));
            console.log('length: ' + $scope.familyData.length);
            $scope.someSpecificData = $scope.familyData[2];
        });


        
        //$scope.familyData = familyservice.Data;
        console.log('isArray: ' + angular.isArray($scope.familyData));
        console.log('length: ' + $scope.familyData);
  });
