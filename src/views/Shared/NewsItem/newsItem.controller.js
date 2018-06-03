(function () {
    'use strict';

    angular
		.module('AlphaFin')
        .controller('newsItemsController', controller);

	controller.$inject = ['$scope', '$sce'];

	function controller($scope, $sce) {
        /* jshint validthis:true */
		var vm = this;
		vm.trustedhtmlItems = [];
		       
		$scope.$watch('bodyitems', function (value) {
			//expect to be an array
			if(angular.isDefined(value))
			vm.trustedhtmlItems = value.forEach(s => $sce.trustAsHtml(s));
		})

		function activate() {
			//$sce.trustAsHtml(value);
		}
        activate();
    }
})();
