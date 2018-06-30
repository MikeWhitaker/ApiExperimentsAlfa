(function() {
  "use strict";
  angular.module("webFrontEndApp").factory("UserApi", userApi);

  userApi.$inject = ["$resource"];
  /** @ngInject */
  function userApi($resource) {
    return $resource("/Names");
  }
})();
