(function () {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController)

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
    var reg = this;

    reg.submit = function() {
        MenuService.addUser(reg.user);
        console.log("User Added");
    }
}

})();