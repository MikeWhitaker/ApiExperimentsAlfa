(function () {
    'use strict';

    angular
        .module('AlphaFin')
		.service('initializeRepository', service);

	service.$inject = ['ObservableClient'];

	function service(ObservableClient) {
		var vm = this;

		var aListOfObjects = [{
			name: 'Jildert Oosten',
			description: 'Client',
			partner: 'Onbekend',
			children: 'Onbekend'
		}, {
			name: 'A new client',
			description: 'Client',
			partner: 'Onbekend',
			children: 'Onbekend'
		}, {
			name: 'Jichael Mackson',
			description: 'Client',
			partner: 'Bubbles',
			children: 'Onbekend'
		}, {
			name: 'Silva Millekamp',
			description: 'Client',
			partner: 'Onbekend',
			children: 'Joost Millekamp'
		}];

		aListOfObjects.forEach(function (item) {
			var aClient = new ObservableClient(item);
			aClient.save();
		});
	};
})();