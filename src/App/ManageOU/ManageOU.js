'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('AlphaFin')
	.controller('ManagerOUController', function ($scope, dutchOuDataService) {
			var vm = this;

			$scope.treeOptions = {
				nodeChildren: "children",
				dirSelectable: true,
				injectClasses: {
					ul: "a1",
					li: "a2",
					liSelected: "a7",
					iExpanded: "a3",
					iCollapsed: "a4",
					iLeaf: "a5",
					label: "a6",
					labelSelected: "a8"
				}
			};
			

			vm.clickNode = function (node) {
				vm.selectedOU = node;
				return node;
			};
			vm.name = 'ManageOU Controller';
			
			$scope.dataForTheTree = dutchOuDataService.query();
					
			$scope.dataForTheTree.$promise.then(function (result) {
				$scope.dataForTheTree = result;
			});


  });
