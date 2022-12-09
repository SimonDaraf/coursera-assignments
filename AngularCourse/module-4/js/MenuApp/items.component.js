(function () {

    'use strict';

    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'templates/item.html',
        controller: 'ItemsController',
        bindings: {
            item: '<'
        }
    });

})();