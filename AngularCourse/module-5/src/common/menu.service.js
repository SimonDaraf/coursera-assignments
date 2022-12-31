(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user = null;
  var noResponse = false;
  var userAdded = false;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.addUser = function(obj) {
    user = obj;
    userAdded = true;
    console.log("User passed to service");
  };

  service.getUserAdded = function(){
    return userAdded;
  }

  /* function getFavouriteItem(category, item) {
    return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + category + "/menu_items/" + item + ".json").then(function (response) {
      return response;
    });
  } */

  service.getUserInformation = function() {

    if(userAdded === false) {
      return null;
    }
    else {
      return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + user.category + "/menu_items/" + (user.itemNumber - 1) + ".json").then(function (response) {
        if(response.data === null) {
          noResponse = true;
          return {
            name: user.firstName + " " + user.lastName,
            email: user.email,
            phone: user.phone,
            item: "Item not found"
          }
        } 
        else {
          return {
            name: user.firstName + " " + user.lastName,
            email: user.email,
            phone: user.phone,
            item: response.data.name
          }
        }
      });
    }
  }

}



})();
