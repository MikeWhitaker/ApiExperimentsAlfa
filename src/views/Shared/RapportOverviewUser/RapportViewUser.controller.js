(function () {
	'use strict';

	angular
		.module('AlphaFin')
		.controller('RapportViewUserController', controller);

	controller.$inject = ['$scope', 'ClientRepostitory', 'initializeRepository','$rootScope'];
	
	function controller($scope, ClientRepostitory, initializeRepository, $rootScope){
		/* jshint validthis:true */
		var vm = this;
		vm.user = getTestUserData();

		$scope.showAddClientForm = false;

		$scope.updateListOfClients = function () {
			$scope.listOfClients = ClientRepostitory.clients;
		};

		function activate() {
			$scope.updateListOfClients();
		}

		function getTestUserData() {

			return {
				name: 'Helen van den Wulp',
				description: 'Financieel Advies',
				ou: 'Van Dijken Groep'
			}
		}

		activate();
	}
})();
