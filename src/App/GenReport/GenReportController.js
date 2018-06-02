'use strict'

angular.module('AlphaFin')
	.controller('GenReportController', function ($scope, RapportDataService) {
		var vm = this;
		vm.busy = true;

		vm.jsonData = RapportDataService.query();

		vm.jsonData.$promise.then(function (result) {

			vm.busy = false;
		});







	});