(function () {
    'use strict';

    angular
        .module('AlphaFin')
        .service('NavbarObserver', NavbarObserver);

    //NavbarObserver.$inject = ['$http'];

    function NavbarObserver() {


		vm = this;
		vm.lastUpDatedClient = '';

		function update(clientObject) {

			//do something when the client is updated.
			(clientObject.name) ? vm.lastUpDatedClient = clientObject.name : angular.noop;
		}

		return {
			update: update,
			getLastUpdatedClient: vm.lastUpDatedClient
		}
    }
})();
