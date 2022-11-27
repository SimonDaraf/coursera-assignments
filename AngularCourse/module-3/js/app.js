(function () {

    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'item.html'
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.found = [];
        menu.searchTerm = "";
        menu.isEmpty = false;

        console.log(menu.searchTerm);

        menu.narrowList = function() {
            console.log(menu.searchTerm);
            var promise = MenuSearchService.getMatchedMenuItems();
            promise.then(function (result) {
                console.log(result.data.menu_items[0]);
                menu.found = MenuSearchService.sortList(result.data.menu_items, menu.searchTerm);

                console.log(menu.found);
                menu.isEmpty = MenuSearchService.checkLength(menu.found);
            });
        }

        menu.removeItem = function(index) {
            menu.found.splice(index, 1)
        }
    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function() {
            var response = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            });

            return response;
        }

        service.sortList = function(array, searchTerm) {
            var foundItems = [];
            var searchNoSpace = searchTerm.toLowerCase().replace(/\s+/g, '');
            if(searchNoSpace === '') {
             return foundItems;       
            }else {
                for(var i = 0; i < array.length; i++) {
                    if(array[i].description.toLowerCase().includes(searchNoSpace)) {
                        foundItems.push(array[i]);
                    }
                }
            }   
            return foundItems;
        }

        service.checkLength = function(array) {
            if(array.length === 0){
                return true;
            }
            else {
                return false;
            }
        }
    }

})();