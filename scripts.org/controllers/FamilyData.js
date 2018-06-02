'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('childListApp')
    .controller('FamilyData', function ($scope,familyservice) {
        var vm = this;
        //$scope.dad = familyservice.getDad();

        $scope.familyData = familyservice.query();
        console.log('familyData: ' + $scope.familyData);



  });
