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