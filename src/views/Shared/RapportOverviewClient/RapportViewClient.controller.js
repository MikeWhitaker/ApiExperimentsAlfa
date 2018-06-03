(function () {
	'use strict';

	angular
		.module('AlphaFin')
		.controller('RapportViewClientController', controller);

	controller.$inject = ['$scope'];

	function controller($scope) {
		/* jshint validthis:true */
		var vm = this;
		activate();

		vm.delete = function ($event, toBeDeletedClient) {
			toBeDeletedClient.delete();
			$scope.update();
		};

		function activate() { }
	}
})();
