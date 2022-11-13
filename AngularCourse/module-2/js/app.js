(function () {

    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }

        toBuy.checkIfEmpty = function() {
            return ShoppingListCheckOffService.checkIfEmpty(toBuy.toBuyItems);
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

        alreadyBought.checkIfEmpty = function() {
            return ShoppingListCheckOffService.checkIfEmpty(alreadyBought.boughtItems)
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyArray = addItemsToArray();
        var boughtArray = [];

        service.getToBuyItems = function() {
            return toBuyArray;
        };
        service.getBoughtItems = function() {
            return boughtArray;
        }

        service.buyItem = function(itemIndex) {
            var itemPlaceHolder = service.addItemToBought(itemIndex);
            toBuyArray.splice(itemIndex, 1);
            boughtArray.push(itemPlaceHolder);
        }

        service.addItemToBought = function(itemIndex) {
            var item = toBuyArray[itemIndex];
            return item;
        }

        service.checkIfEmpty = function(array) {
            if (array.length === 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    // These just add items, could also be implemented manually
    function addItemsToArray(){
        var item = {};
        var items = [];
        var nameArray = ['Cookies', 'Chips', 'Sodas', 'NutrientBars', 'Apples'];
        var quantityArray = [10, 2, 4, 15, 3];

        for (var i = 0; i < nameArray.length; i++){
            item = ItemCreator(nameArray[i], quantityArray[i]);
            items.push(item);
        }
        return items;
    }

    function ItemCreator(itemName, itemQuantity) {
        var item = {
            name: itemName,
            quantity: itemQuantity
        };
        return item;
    }

})();