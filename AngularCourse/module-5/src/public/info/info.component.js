(function () {
"use strict";
    
angular.module('public')
.component('info', {
  templateUrl: 'src/public/info/info.html',
  bindings: {
    info: '<'
  }
});
    
})();