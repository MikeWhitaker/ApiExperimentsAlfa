(function() {
  "use strict";
  angular.module("webFrontEndApp").factory("User", factory);

  factory.$inject = [];
  function factory() {
    var id = 1;

    var User = function(data) {
      this.id = id++;
      this.name = data.name || "";
      this.username = data.username || "";
      this.email = data.email || "";
      this.address = data.address || {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      };
      this.phone = data.phone || "";
      this.website = data.website || "";
      this.company = data.company || {
        name: "",
        catchPhrase: "",
        bs: ""
      };
    };

    return User;
  }
})();
