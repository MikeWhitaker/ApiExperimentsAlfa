(function () {
	'use strict';

	angular
		.module('AlphaFin')
		.controller('RapportViewAddClientController', controller);

	controller.$inject = ['$scope', 'Client', 'ClientActionNotifcationDataService'];

	function controller($scope, Client, ClientActionNotifcationDataService) {
		/* jshint validthis:true */
		var vm = this;

		vm.visible = false;

		vm.submit = function () {
			var newClient = new Client(vm.client);

			//Hier moet het nieuwe client object aan de observer gekoppeld worden.
			newClient.observers.add(ClientActionNotifcationDataService);
			newClient.save();

			closeForm();
		};

		vm.cancel = function () {
			closeForm();
		};

		function closeForm() {
			resetState();
			$scope.showAddClientForm = false;
		}

		function resetState() {
			vm.client = {
				name: '',
				partner: '',
				children: ''
			};
		}

		activate();

		function activate() {
			resetState();
		}
	}
})();
