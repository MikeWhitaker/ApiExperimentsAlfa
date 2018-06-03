(function () {
	'use strict';

	angular.module('AlphaFin').service('ClientActionNotifcationDataService', ClientActionNotifcationDataService);

	ClientActionNotifcationDataService.$inject = [];

	function ClientActionNotifcationDataService() {
		var vm = this;

		vm.lastOperation = '';
		vm.client = '';

		vm.messagePrivate = '';

		var observerCallbacks = [];

		//register an observer
		vm.registerObserverCallback = function (callback) {
			observerCallbacks.push(callback);
		};

		var notifyObservers = function () {
			angular.forEach(observerCallbacks, function (callback) {
				callback();
				console.log('calling: ', callback);
			});
		};

		var getMessagePrivate = function () {
			console.log('from getMessage:', vm.messagePrivate);
			return vm.messagePrivate;
		}


		function updatePrivate(client) {
			vm.messagePrivate = client.name + ' was ' + client.lastCrudAction;
			//Update observers
			notifyObservers();
			console.log('vm.messagePrivate: ', vm.messagePrivate);
		}

		var service = {
			registerObserver: vm.registerObserverCallback,
			getMessage: getMessagePrivate,
			message: vm.messagePrivate,
			update: updatePrivate,
		};

		return service;
	}
})();