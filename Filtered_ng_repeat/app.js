var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("numberArray :", numberArray);

function aboveFiveFilter(value){
  return value>5;
}


var filteredNumberArray = numberArray.filter(aboveFiveFilter);
console.log("filteredNumberArray :", filteredNumberArray);
/*
  var filteredNumberArray = numberArray.filter(function(value){
    return value > 5;
  });
*/

var shoppingList = ['Milk', 'Cookie','Chocolate','Peanut Butter', 'Pepto Bismol','Pepto Bismol (Chocolate flavor)','Pepto Bismol (Cookie flavor)'];
console.log("shoppingList:",shoppingList);
var searchValue = "Bismol";
function containsFilter(value){
  return value.indexOf(searchValue) !== -1;
}

var searchShoppingList = shoppingList.filter(containsFilter);
console.log("searchShoppingList : ",searchShoppingList);

(function(){
  angular.module('shoppingListApp', [])
  .controller('shoppingListController',shoppingListController)


  shoppingListController.$inject = ['$scope'];
  function shoppingListController($scope){
    $scope.shoppingList = shoppingList;
  }
})();
