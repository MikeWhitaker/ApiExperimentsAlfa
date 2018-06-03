(function () {
    'use strict';

    angular
        .module('AlphaFin')
        .controller('spinnerController', controller);

    controller.$inject = ['$location'];

    function controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller';

        activate();

        function activate() { }
    }
})();
