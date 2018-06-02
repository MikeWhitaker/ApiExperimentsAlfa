(function () {
    'use strict';

    angular
        .module('AlphaFin')
		.factory('Client', factory);

	factory.$inject = ['ClientRepostitory'];

	function factory(ClientRepostitory) {
		var id = 1;
		var lastCrudAction = '';

		var Client = function (data) {
			this.id = id++;
			this.name = data.name;
			this.description = data.description || 'Client';
			this.partner = data.partner;
			this.children = data.children;
			this.observers = new ObserverList();
			this.lastCrudAction = 'created';
		};

		Client.prototype.save = function () {
			ClientRepostitory.save(this);
			this.UpdateObservers();
		};

		Client.prototype.delete = function () {
			ClientRepostitory.delete(this);
		};

		Client.prototype.UpdateObservers = function () {
			this.observers.observerList.forEach(s => s.update(this));

		};

		function ObserverList() {
			this.observerList = [];
		}

		ObserverList.prototype.add = function (obj) {
			return this.observerList.push(obj);
		};


		return Client;
	}
})();