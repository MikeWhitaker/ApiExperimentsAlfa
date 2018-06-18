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
  controller.$inject = ["$resource", "User"];

  function controller($resource, User) {
    var vm = this;
    vm.userData = [];

    function activate() {
      vm.busy = true;
      var result = $resource("/Names");
      vm.data = result.query();

      vm.data.$promise
        .then(function(result) {
          _(result).each(function(item){
            var user = new User(item);
            user.address = _(user.address).omit('geo');
            vm.userData.push(user);
          });    
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          vm.busy = false;
        });
    }
    activate();
  }
})();
