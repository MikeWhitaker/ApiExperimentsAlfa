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