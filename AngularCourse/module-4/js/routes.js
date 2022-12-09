(function () {

    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
    function RoutesConfig($stateProvider, $urlRoterProvider) {

        $urlRoterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            })

            .state('categories', {
                url: '/categories',
                component: 'categories',
                resolve: {
                    categories: ['MenuDataService', 
                        function(MenuDataService) {
                            return MenuDataService.getAllCategories()
                                .then(function(result) {
                                    return result.data;
                                });
                        }]
                }
            })

            .state('item', {
                url: '/category/{shortName}',
                component: 'items',
                resolve: {
                    item: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.shortName)
                                .then(function (result) {
                                    return result.data;
                                });
                        }]
                }
            });
    }

})();