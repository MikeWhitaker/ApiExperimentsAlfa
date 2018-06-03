angular.module('AlphaFin').directive('rapportViewUser', function () {
	return {
		templateUrl: '/views/Shared/RapportOverviewUser/RapportViewUser.html',
		controller: 'RapportViewUserController',
		controllerAs: 'RapportCtrl'
	};
});