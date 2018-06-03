(function () {
    'use strict';

    angular
		.module('AlphaFin')
        .controller('AddButton', AddButton);

	AddButton.$inject = ['$scope'];

    function AddButton($scope) {
        /* jshint validthis:true */
        var vm = this;
		$scope.onClick = function () {
			$scope.showAddClientForm = true;
		};

        activate();

        function activate() { }
    }
})();
