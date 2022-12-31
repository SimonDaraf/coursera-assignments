(function () {
'use strict';
    
angular.module('public')
.controller('InfoController', InfoController)
    
InfoController.$inject = ['info', 'MenuService'];
function InfoController(info, MenuService) {
    var infoCtrl = this;
    infoCtrl.user = info;
    infoCtrl.hasRegistered = MenuService.getUserAdded();
    console.log(infoCtrl.hasRegistered);
}
    
})();