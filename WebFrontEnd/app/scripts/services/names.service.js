(function() {
  "use strict";

  /**
   * @ngdoc service
   * @name webFrontEndApp.names.service.js
   * @description
   * # names.service.js
   * Service in the webFrontEndApp.
   */
  angular.module("webFrontEndApp").service("names", namesService);

  namesService.$inject = ["$resource"];

  function namesService($resource) {
    var vm = this;
    vm.service = {
      getListOfNames: getListOfNames
    };

    return vm.namesService;
  }

  function getListOfNames() {
    return ["henk", "jan", "piet"];
  }
})();
