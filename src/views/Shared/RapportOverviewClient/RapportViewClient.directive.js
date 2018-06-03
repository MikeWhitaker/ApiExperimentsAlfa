(function () {
	'use strict';

	angular
		.module('AlphaFin')
		.directive('rapportViewClient', directive);

	directive.$inject = ['$window'];

	function directive($window) {
		// Usage:
		//     <directive></directive>
		// Creates:
		// GenReport
		return directive = {
			restrict: 'E',
			scope: {
				update: '&',
				client: '='
			},
			templateUrl: '/views/Shared/RapportOverviewClient/RapportViewClient.html',
			controller: 'RapportViewClientController',
			controllerAs: 'RapportViewClientCtrl'
		};
	}
})();