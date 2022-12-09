(function () {

    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'templates/categories.html',
        controller: 'CategoriesController',
        bindings: {
            categories: '<'
        }
    });

})();