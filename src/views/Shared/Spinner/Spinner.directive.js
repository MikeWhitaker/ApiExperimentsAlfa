(function () {
    'use strict';

    angular
		.module('AlphaFin')
		.directive('spinner', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        // 
        var directive = {
			restrict: 'E',
			templateUrl: '/views/Shared/Spinner/Spinner.html',
			controller: ''
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();