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