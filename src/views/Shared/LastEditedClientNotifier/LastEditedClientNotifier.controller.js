(function () {
	'use strict';

	angular
		.module('AlphaFin')
		.controller('lastEditedClientNotifier', lastEditedClientNotifier);

	lastEditedClientNotifier.$inject = ['$scope', 'ClientActionNotifcationDataService'];

	function lastEditedClientNotifier($scope, ClientActionNotifcationDataService) {
		/* jshint validthis:true */
		var vm = this;

		var updateMesage = function () {
			$scope.lastNotifiedClient = ClientActionNotifcationDataService.getMessage();
			console.log('$scope.lastNotifiedClient: ', $scope.lastNotifiedClient);
		};
		//Register as observer with dataservice

		ClientActionNotifcationDataService.registerObserver(updateMesage);

		console.log('$scope.lastNotifiedClient: ', $scope.lastNotifiedClient);
		
		activate();

		function activate() { }
	}
})();