(function () {
	'use strict';

	angular
		.module('AlphaFin')
		.service('ClientRepostitory', ClientRepostitory);

	ClientRepostitory.$inject = [];

	//removed $http service
	function ClientRepostitory() {
		var vm;
		vm = this;

		var clientList = [];

		function saveClient(client) {
			//should check to see if this is a client type.

			//Should check to see if the client does not exist in the repo.
			clientList.push(client);
			console.log('Saved the client: ' + client.name);
		}

		function deleteClient(client) {
			//find the client and the remove the client

			var index = getIndexObject('id', client.id, clientList);
			clientList.splice(index,1);
		}

		function getIndexObject(key, searchValue, anArray) {
			for (var i = 0; i < anArray.length; i++) {
				if (anArray[i][key] === searchValue) {
					return i;
				}
			}
			return -1;
		}

		//function getClients() {
		//	return clientList;
		//}
		
		var service = {
			clients: clientList,
			save: saveClient,
			delete: deleteClient
		};

		return service;

	}
})();