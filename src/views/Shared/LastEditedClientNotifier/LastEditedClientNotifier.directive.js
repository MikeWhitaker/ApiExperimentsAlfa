(function () {
    'use strict';

    angular
		.module('AlphaFin')
		.directive('lastEditedClientNotifier', lastEditedClientNotifier);

	lastEditedClientNotifier.$inject = ['$window'];

	function lastEditedClientNotifier($window) {
        // Usage:
        //     <AddButton></AddButton>
        // Creates:
        // 
		return {
			restrict: 'E',
			scope: {
				//showAddClientForm: '='
			},
			templateUrl: '/views/Shared/LastEditedClientNotifier/lastEditedClientNotifier.html',
			controller: 'lastEditedClientNotifier',
			controllerAs: 'lastClientNotifier'
		};
    }
})();