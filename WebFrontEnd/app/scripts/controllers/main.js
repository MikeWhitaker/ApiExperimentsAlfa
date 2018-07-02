(function() {
  "use strict";

  /**
   * @ngdoc function
   * @name webFrontEndApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the webFrontEndApp
   */
  angular.module("webFrontEndApp").controller("MainCtrl", controller);
  controller.$inject = ["UserApi", "User"];

  function controller(UserApi, User) {
    var vm = this;
    vm.userData = [];

    function activate() {
      debugger;
      vm.busy = true;
      vm.data = UserApi.query();
      vm.data.$promise
        .then(function(result) {
          _(result).each(function(item) {
            var user = new User(item);
            user.address = _(user.address).omit("geo");
            vm.userData.push(user);
          });
        })
        .catch(function(e) {
          console.log(e);
        })
        .finally(function(e) {
          vm.busy = false;
        });
    }

    activate();
  }
})();
