(function(){
  'use strict';

  angular.module("MenuCategoriesApp", [])
  .controller('MenuCategoriesController', MenuCategoriesController)
  .service('MenuCategoriesService', MenuCategoriesService)
  // .constanat('ApiBashPath', "https://devids-resturant.herokuapp.com");

  MenuCategoriesController.$inject = ["MenuCategoriesService"];
  function MenuCategoriesController(MenuCategoriesService){
    var menu = this;

    var promise = MenuCategoriesService.getMenuCategories();

    promise.then(function(response){
      menu.categories = response.data;
    }).catch(function(error){
      console.log("something went terriably wrong.");
    });

    menu.logMenuItems = function(shortName){

      var promise = MenuCategoriesService.getMenuForCategory(shortName);

      promise.then(function(response){
        console.log(response.data);
      }).catch(function(error){
        console.log(error);
      })
    };

  }

MenuCategoriesService.$inject = ['$http'];
function MenuCategoriesService($http){
  var service = this;

  service.getMenuCategories = function(){
    var response = $http({
      method:"GET",
      url:("http://davids-resturant.herokuapp.com/categories.json")
    });

    return response;
  };

  service.getMenuForCategory = function(shortName){
    var response = $http({
      method:"GET",
      url : (ApiBashPath + "/menu_items.json"),
      params : {
        category:shortName
      }
    });
    return response;
  };


}


})();
