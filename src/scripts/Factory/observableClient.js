(function () {
    'use strict';

    angular
        .module('AlphaFin')
		.factory('ObservableClient', factory);

	factory.$inject = ['ClientRepostitory','Client'];

	function factory(ClientRepostitory, Client) {

		var ObservableClient = function (data) {
			Client.call(this, data);
			this.lastCrudAction = data.lastCrudAction;
		}

		ObservableClient.prototype = Object.create(Client.prototype);
		
		ObservableClient.prototype.UpdateObservers = function () {
			this.observers.observerList.forEach(s => s.update(this));

		};

		function ObserverList() {
			this.observerList = [];
		}

		ObserverList.prototype.add = function (obj) {
			return this.observerList.push(obj);
		};


		return ObservableClient;
	}
})();