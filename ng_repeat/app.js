(function(){
  'use strict';

  var shoppingList1 = [
    "milk","donuts","cookie","chocolate","penuts butter",
    "pepto bismol","pepto bismol(chocholate)", "pepto bismol(cookie flavor)"];

  var shoppingList2 = [
    {
      name:"milk",
      quantity:"2"
    },
    {
      name:"donuts",
      quantity: "200"
    },
    {
      name:"cookie",
      quantity: "300"
    }
  ];

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController)

  ShoppingListController.$Inject = ['$scope'];

  function ShoppingListController($scope){
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function(){
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };

      $scope.shoppingList2.push(newItem);
    }

  }

})();
