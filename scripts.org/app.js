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
