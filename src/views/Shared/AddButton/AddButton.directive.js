(function () {
    'use strict';

    angular
		.module('AlphaFin')
        .directive('addButton', AddButton);

    AddButton.$inject = ['$window'];

    function AddButton($window) {
        // Usage:
        //     <AddButton></AddButton>
        // Creates:
        // 
        return {
			restrict: 'E',
			scope: {
				showAddClientForm: '='
			},
			templateUrl: '/views/Shared/AddButton/AddButton.html',
			controller: 'AddButton',
			controllerAs: 'btn'
		}
    }
})();