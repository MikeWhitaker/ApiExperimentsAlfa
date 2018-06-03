'use strict';

/**
 * @ngdoc overview
 * @name childListApp
 * @description
 * # childListApp
 *
 * Main module of the application.
 */

angular.module('AlphaFin', ['ngRoute', 'ngResource', 'treeControl', 'ngSanitize']).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/ManageOU', {
		templateUrl: 'App/ManageOU/ManageOU.html',
		controller: 'ManagerOUController',
		controllerAs: 'Manager'
	}).when('/GenReport', {
		templateUrl: 'App/GenReport/GenReport.html',
		controller: 'GenReportController',
		controllerAs: 'GenReportCtrl'
	}).when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'mainCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);

'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('AlphaFin').controller('MainCtrl', function () {
	function fillArrayToMinimumLenth(anArray, minLength, fillValue) {
		//Should test if is an array
		//Should test is minlength is a number
		if (!Array.isArray(anArray)) throw new TypeError('Invalid input type');

		if (typeof minLength !== 'number') throw new TypeError('Invalid input type');

		if (anArray.length < minLength) {
			var fillAmmount = minLength - anArray.length;
			for (var i = 0; i < fillAmmount; i++) {
				anArray.push(fillValue);
			}
		}
		return anArray;
	}

	function balanceListsLength(listA, listB) {
		if (!Array.isArray(listA) || !Array.isArray(listB)) throw new TypeError('Invalid input type');

		if (listA.length < listB.length) {
			fillArrayToMinimumLenth(listA, listB.length, '');
		}
		if (listB.length < listA.length) {
			fillArrayToMinimumLenth(listB, listA.length, '');
		}

		return {
			listA: listA,
			listB: listB
		};
	}

	var todolist = ['Finite State Machine', 'News Item Factory', 'WebApi that returns newsItems', 'WebApi that returns newsItems from mongodb'];

	var done = ['Directive using bindToController', 'Observer pattern', 'Client repository using pattern', 'Nested Directives', 'Client', 'client object/class factory'];

	var formattedLists = balanceListsLength(todolist, done);

	var vm = this;

	vm.newsBullets01 = ['implements <strong>decorator</strong> pattern in pure javascript pattern'];

	vm.newsBullets02 = ['Implements <a href="https://plnkr.co/edit/vBfWSBZERdMN0IlcZ5I2?p=info">observer pattern</a> in multiple places'];

	vm.newsBullets03 = ['This very News Item directive (and all the other new feature blocks) ...', 'Implements <strong>bindToController</strong>', 'Implements <strong>ngSanitize</strong> to pass html to the newsItem directive'];

	vm.toDo = formattedLists.listA;
	vm.done = formattedLists.listB;
});

'use strict';

/**
 * @ngdoc service
 * @name AlphaFin.treeDataService
 * @description
 * # familyservice
 * Service in the childListApp.
 */
angular.module('AlphaFin').service('treeDataService', function () {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var vm = this;
	vm.getTreeNodes = function () {
		var treeNodes = [{ 'ou': 'Corporate Investment', 'children': [{ 'ou': 'Corporate and Investment', 'children': [] }, { 'ou': 'Country Monitoring', 'children': [] }]
		}, { 'ou': 'Core Competities', 'children': [{ 'ou': 'Customer and client Solutions', 'children': [] }, { 'ou': 'Talent and Culture', 'children': [] }, { 'ou': 'Engineering', 'children': [] }, { 'ou': 'Data', 'children': [] }]
		}, { 'ou': 'Risk and Finances', 'children': [{ 'ou': 'Finances', 'children': [] }, { 'ou': 'Global Risk Managment', 'children': [] }]
		}, { 'ou': 'Stratagy and Control', 'children': [{ 'ou': 'Public Affairs', 'children': [] }, { 'ou': 'Legal and compliance', 'children': [] }, { 'ou': 'Stratagy and M&A', 'children': [] }, { 'ou': 'Accounting Supervisors', 'children': [] }, { 'ou': 'Communications', 'children': [] }, { 'ou': 'General Secetary', 'children': [] }, { 'ou': 'Internal Audit', 'children': [] }]
		}];

		return treeNodes;
	};
});

'use strict';

/**
 * @ngdoc service
 * @name AlphaFin.treeDataService
 * @description
 * # familyservice
 * Service in the childListApp.
 */
angular.module('AlphaFin').service('RapportDataService', ['$resource', function ($resource) {

	return $resource('/Data/getRapportData.json');
}]);
'use strict';

/**
 * @ngdoc service
 * @name AlphaFin.treeDataService
 * @description
 * # familyservice
 * Service in the childListApp.
 */
angular.module('AlphaFin').service('dutchOuDataService', ['$resource', function ($resource) {

	return $resource('/Data/TreeData001.json');
}]);
(function () {
	'use strict';

	angular.module('AlphaFin').service('ClientRepostitory', ClientRepostitory);

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
			clientList.splice(index, 1);
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
(function () {
	'use strict';

	angular.module('AlphaFin').service('initializeRepository', service);

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
'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('AlphaFin').controller('ManagerOUController', ['$scope', 'dutchOuDataService', function ($scope, dutchOuDataService) {
	var vm = this;

	$scope.treeOptions = {
		nodeChildren: "children",
		dirSelectable: true,
		injectClasses: {
			ul: "a1",
			li: "a2",
			liSelected: "a7",
			iExpanded: "a3",
			iCollapsed: "a4",
			iLeaf: "a5",
			label: "a6",
			labelSelected: "a8"
		}
	};

	vm.clickNode = function (node) {
		vm.selectedOU = node;
		return node;
	};
	vm.name = 'ManageOU Controller';

	$scope.dataForTheTree = dutchOuDataService.query();

	$scope.dataForTheTree.$promise.then(function (result) {
		$scope.dataForTheTree = result;
	});
}]);

'use strict';

angular.module('AlphaFin').controller('GenReportController', ['$scope', 'RapportDataService', function ($scope, RapportDataService) {
	var vm = this;
	vm.busy = true;

	vm.jsonData = RapportDataService.query();

	vm.jsonData.$promise.then(function (result) {

		vm.busy = false;
	});
}]);
(function () {
	'use strict';

	angular.module('AlphaFin').factory('Client', factory);

	factory.$inject = ['ClientRepostitory'];

	function factory(ClientRepostitory) {
		var id = 1;
		var lastCrudAction = '';

		var Client = function Client(data) {
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
			var _this = this;

			this.observers.observerList.forEach(function (s) {
				return s.update(_this);
			});
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
(function () {
	'use strict';

	angular.module('AlphaFin').factory('ObservableClient', factory);

	factory.$inject = ['ClientRepostitory', 'Client'];

	function factory(ClientRepostitory, Client) {

		var ObservableClient = function ObservableClient(data) {
			Client.call(this, data);
			this.lastCrudAction = data.lastCrudAction;
		};

		ObservableClient.prototype = Object.create(Client.prototype);

		ObservableClient.prototype.UpdateObservers = function () {
			var _this2 = this;

			this.observers.observerList.forEach(function (s) {
				return s.update(_this2);
			});
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
'use strict';

angular.module('AlphaFin')
// Register directive and inject dependencies
.directive('showNodeChildren', function () {
	return {
		templateUrl: 'views/Shared/showNodeChildren.html',
		restrict: 'E',
		scope: {},
		bindToController: {
			selectedOU: '=',
			name: '='
		},
		controller: function controller() {
			var ctrl = this;
			ctrl.name = 'Mike';
		},
		controllerAs: 'ctrlDirective'
	};
});

angular.module('AlphaFin').directive('rapportViewUser', function () {
	return {
		templateUrl: '/views/Shared/RapportOverviewUser/RapportViewUser.html',
		controller: 'RapportViewUserController',
		controllerAs: 'RapportCtrl'
	};
});
(function () {
	'use strict';

	angular.module('AlphaFin').controller('RapportViewUserController', controller);

	controller.$inject = ['$scope', 'ClientRepostitory', 'initializeRepository', '$rootScope'];

	function controller($scope, ClientRepostitory, initializeRepository, $rootScope) {
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
			};
		}

		activate();
	}
})();

(function () {
	'use strict';

	angular.module('AlphaFin').directive('rapportViewClient', directive);

	directive.$inject = ['$window'];

	function directive($window) {
		// Usage:
		//     <directive></directive>
		// Creates:
		// GenReport
		return directive = {
			restrict: 'E',
			scope: {
				update: '&',
				client: '='
			},
			templateUrl: '/views/Shared/RapportOverviewClient/RapportViewClient.html',
			controller: 'RapportViewClientController',
			controllerAs: 'RapportViewClientCtrl'
		};
	}
})();
(function () {
	'use strict';

	angular.module('AlphaFin').controller('RapportViewClientController', controller);

	controller.$inject = ['$scope'];

	function controller($scope) {
		/* jshint validthis:true */
		var vm = this;
		activate();

		vm.delete = function ($event, toBeDeletedClient) {
			toBeDeletedClient.delete();
			$scope.update();
		};

		function activate() {}
	}
})();

(function () {
	'use strict';

	angular.module('AlphaFin').controller('spinnerController', controller);

	controller.$inject = ['$location'];

	function controller($location) {
		/* jshint validthis:true */
		var vm = this;
		vm.title = 'controller';

		activate();

		function activate() {}
	}
})();

(function () {
	'use strict';

	angular.module('AlphaFin').directive('spinner', directive);

	directive.$inject = ['$window'];

	function directive($window) {
		// Usage:
		//     <directive></directive>
		// Creates:
		// 
		var directive = {
			restrict: 'E',
			templateUrl: '/views/Shared/Spinner/Spinner.html',
			controller: ''
		};
		return directive;

		function link(scope, element, attrs) {}
	}
})();
(function () {
	'use strict';

	angular.module('AlphaFin').directive('addButton', AddButton);

	AddButton.$inject = ['$window'];

	function AddButton($window) {
		// Usage:
		//     <AddButton></AddButton>
		// Creates:
		// 
		return {
			restrict: 'E',
			scope: {
				showAddClientForm: '='
			},
			templateUrl: '/views/Shared/AddButton/AddButton.html',
			controller: 'AddButton',
			controllerAs: 'btn'
		};
	}
})();
(function () {
	'use strict';

	angular.module('AlphaFin').controller('AddButton', AddButton);

	AddButton.$inject = ['$scope'];

	function AddButton($scope) {
		/* jshint validthis:true */
		var vm = this;
		$scope.onClick = function () {
			$scope.showAddClientForm = true;
		};

		activate();

		function activate() {}
	}
})();

(function () {
	'use strict';

	angular.module('AlphaFin').controller('RapportViewAddClientController', controller);

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

(function () {
	'use strict';

	angular.module('AlphaFin').directive('rapportViewAddClient', directive);

	directive.$inject = ['$window'];

	function directive($window) {
		// Usage:
		//     <directive></directive>
		// Creates:
		// GenReport
		return {
			restrict: 'E',
			templateUrl: '/views/Shared/RapportOverviewAddClient/RapportViewAddClient.html',
			//scope: {
			//	showAddClientForm: '='
			//},
			controller: 'RapportViewAddClientController',
			controllerAs: 'RapportViewAddClientCtrl'
		};
	}
})();
(function () {
	'use strict';

	angular.module('AlphaFin').controller('lastEditedClientNotifier', lastEditedClientNotifier);

	lastEditedClientNotifier.$inject = ['$scope', 'ClientActionNotifcationDataService'];

	function lastEditedClientNotifier($scope, ClientActionNotifcationDataService) {
		/* jshint validthis:true */
		var vm = this;

		var updateMesage = function updateMesage() {
			$scope.lastNotifiedClient = ClientActionNotifcationDataService.getMessage();
			console.log('$scope.lastNotifiedClient: ', $scope.lastNotifiedClient);
		};
		//Register as observer with dataservice

		ClientActionNotifcationDataService.registerObserver(updateMesage);

		console.log('$scope.lastNotifiedClient: ', $scope.lastNotifiedClient);

		activate();

		function activate() {}
	}
})();
(function () {
	'use strict';

	angular.module('AlphaFin').directive('lastEditedClientNotifier', lastEditedClientNotifier);

	lastEditedClientNotifier.$inject = ['$window'];

	function lastEditedClientNotifier($window) {
		// Usage:
		//     <AddButton></AddButton>
		// Creates:
		// 
		return {
			restrict: 'E',
			scope: {
				//showAddClientForm: '='
			},
			templateUrl: '/views/Shared/LastEditedClientNotifier/lastEditedClientNotifier.html',
			controller: 'lastEditedClientNotifier',
			controllerAs: 'lastClientNotifier'
		};
	}
})();
(function () {
	'use strict';

	angular.module('AlphaFin').controller('newsItemsController', controller);

	controller.$inject = ['$scope', '$sce'];

	function controller($scope, $sce) {
		/* jshint validthis:true */
		var vm = this;
		vm.trustedhtmlItems = [];

		$scope.$watch('bodyitems', function (value) {
			//expect to be an array
			if (angular.isDefined(value)) vm.trustedhtmlItems = value.forEach(function (s) {
				return $sce.trustAsHtml(s);
			});
		});

		function activate() {
			//$sce.trustAsHtml(value);
		}
		activate();
	}
})();

/// <reference path="newsitem.controller.js" />
(function () {
	'use strict';

	angular.module('AlphaFin').directive('newsItem', newsItem);

	newsItem.$inject = ['$window'];

	function newsItem($window) {
		// Usage:
		//     <newsItem></newsItem>
		// Creates:
		//
		var directive = {
			restrict: 'E',
			bindToController: {
				header: '@',
				bodyitems: '='
			},
			scope: {},
			controller: 'newsItemsController',
			controllerAs: 'newsItemsCtrl',
			templateUrl: '/views/Shared/NewsItem/newsItem.html'
		};
		return directive;
	}
})();
//# sourceMappingURL=built.js.map
