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
