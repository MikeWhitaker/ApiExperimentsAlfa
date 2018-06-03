(function () {
    'use strict';

    angular
        .module('AlphaFin')
		.directive('rapportViewAddClient', directive);

	directive.$inject = ['$window'];

	function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        // GenReport
		return {
			restrict: 'E',
			templateUrl: '/views/Shared/RapportOverviewAddClient/RapportViewAddClient.html',
			//scope: {
			//	showAddClientForm: '='
			//},
			controller: 'RapportViewAddClientController',
			controllerAs: 'RapportViewAddClientCtrl'
        };
    }
})();