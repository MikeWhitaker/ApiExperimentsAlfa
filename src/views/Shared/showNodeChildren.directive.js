'use strict';

angular.module('AlphaFin')
	// Register directive and inject dependencies
	.directive('showNodeChildren',
	function () {
		return {
			templateUrl: 'views/Shared/showNodeChildren.html',
			restrict: 'E',
			scope: {},
			bindToController: {
				selectedOU: '=',
				name: '='
			},
			controller: function () {
				var ctrl = this;
				ctrl.name = 'Mike';
			},
			controllerAs: 'ctrlDirective'
		};
	});
	
