'use strict';

/**
 * @ngdoc overview
 * @name childListApp
 * @description
 * # childListApp
 *
 * Main module of the application.
 */
angular
	.module('AlphaFin', ['ngRoute', 'ngResource', 'treeControl', 'ngSanitize'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/ManageOU', {
				templateUrl: 'App/ManageOU/ManageOU.html',
				controller: 'ManagerOUController',
				controllerAs: 'Manager'
			}).when('/GenReport', {
				templateUrl: 'App/GenReport/GenReport.html',
				controller: 'GenReportController',
				controllerAs: 'GenReportCtrl'
			})
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'mainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

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

	var todolist = [
		'Finite State Machine',
		'News Item Factory',
		'WebApi that returns newsItems',
		'WebApi that returns newsItems from mongodb'
	];

	var done = [
		'Directive using bindToController',
		'Observer pattern',
		'Client repository using pattern',
		'Nested Directives',
		'Client',
		'client object/class factory'
	];

	var formattedLists = balanceListsLength(todolist, done);

	var vm = this;

	vm.newsBullets01 = ['implements <strong>decorator</strong> pattern in pure javascript pattern'];

	vm.newsBullets02 = [
		'Implements <a href="https://plnkr.co/edit/vBfWSBZERdMN0IlcZ5I2?p=info">observer pattern</a> in multiple places'
	];

	vm.newsBullets03 = [
		'This very News Item directive (and all the other new feature blocks) ...',
		'Implements <strong>bindToController</strong>',
		'Implements <strong>ngSanitize</strong> to pass html to the newsItem directive'
	];

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
		var treeNodes = [
			{'ou': 'Corporate Investment', 'children': [
					{ 'ou': 'Corporate and Investment', 'children': [] },
					{ 'ou': 'Country Monitoring', 'children': [] }
				]
			},
			{'ou': 'Core Competities', 'children': [
					{ 'ou': 'Customer and client Solutions', 'children': [] },
					{ 'ou': 'Talent and Culture', 'children': [] },
					{ 'ou': 'Engineering', 'children': [] },
					{ 'ou': 'Data', 'children': [] }
				]
			},
			{'ou': 'Risk and Finances', 'children': [
					{ 'ou': 'Finances', 'children': [] },
					{ 'ou': 'Global Risk Managment', 'children': [] }
				]
			},
			{'ou': 'Stratagy and Control', 'children': [
					{ 'ou': 'Public Affairs', 'children': [] },
					{ 'ou': 'Legal and compliance', 'children': [] },
					{ 'ou': 'Stratagy and M&A', 'children': [] },
					{ 'ou': 'Accounting Supervisors', 'children': [] },
					{ 'ou': 'Communications', 'children': [] },
					{ 'ou': 'General Secetary', 'children': [] },
					{ 'ou': 'Internal Audit', 'children': [] }
				]
			}
		];

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
angular.module('AlphaFin').service('RapportDataService', function ($resource) {

	return $resource('/Data/getRapportData.json');
});
'use strict';

/**
 * @ngdoc service
 * @name AlphaFin.treeDataService
 * @description
 * # familyservice
 * Service in the childListApp.
 */
angular.module('AlphaFin').service('dutchOuDataService', function ($resource) {

	return $resource('/Data/TreeData001.json');
});
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
'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('AlphaFin')
	.controller('ManagerOUController', function ($scope, dutchOuDataService) {
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


  });

'use strict'

angular.module('AlphaFin')
	.controller('GenReportController', function ($scope, RapportDataService) {
		var vm = this;
		vm.busy = true;

		vm.jsonData = RapportDataService.query();

		vm.jsonData.$promise.then(function (result) {

			vm.busy = false;
		});







	});