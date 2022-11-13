(function () {

    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.submittedItems = "";
        $scope.response = "";

        $scope.submitResponse = function () {
            
            var noSpaceItems = removeSpaces($scope.submittedItems);
            console.log("items:" noSpaceItems);

            var condition = checkEmptyString(noSpaceItems);
            
            if (!condition) {
                //Split answer into array
                var items = createArray(noSpaceItems);

                var amount = calculateAmountOfItems(items);

                console.log(amount);

                displayResponse(amount);
            } 
        };

        // Functionality //
        //---------------//

        function removeSpaces(str) {
            var newStr = str.replace(/\s+/g, '');
            return newStr;
        }

        function checkEmptyString (str) {
            if (str === "") {
                displayError();
                return true;
            }
            else {
                return false;
            }
        }

        function createArray (str) {
            var array = str.split(',');

            var cleanArray = removeEmptyItems(array);

            return cleanArray;
        }

        function removeEmptyItems(array) {
            for (var i = array.length - 1; i >= 0; --i) {
                console.log(array[i]);
                if (array[i] === '') {
                    array.splice(i, 1);
                }
            }

            return array;
        }

        function calculateAmountOfItems(array) {
            var num = array.length;
            return num;
        }

        function displayResponse(num) {
            if (num === 0) {
                displayError();
            }
            else if (num <= 3) {
                $scope.response = "Enjoy!";
            }
            else {
                $scope.response = "Too much!";
            }
        }

        function displayError () {
            $scope.response = "Please enter data first";
        }
    };

})();
