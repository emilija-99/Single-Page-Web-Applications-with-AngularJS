(function () {
'use strict';

angular.module('ShoppingListEventsApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
.service('WeightLossFilterService', WeightLossFilterService)
.component('loadingSpinner',{
  templateUrl:'spinner.html',
  controller: SpinnerController
})
.component('shoppingList', {
  templateUrl: 'shoppingList.html',
  controller: ShoppingListControllerController,
  bindings:{
    items: '<',
    myTitle: '@title',
    onRemove: '&'
  }
});

SpinnerController.$inject = ['$rootScope']
function SpinnerController($rootScope){
  var $ctrl = this;
  $rootScope.$on('shoppinglist: processing', function(event, data){
    console.log("Event : ", event);
    console.log("Data : ", data);

    if(data.on){
      $ctrl.showSpinner = true;
    }else{
      $ctrl.showSpinner = false;
    }
  });

  // $ctrl.$onDestory = function(){
  //   cancelListener();
  // }

};

ShoppingListControllerController.$inject = ['$rootScope','$element', '$q','WeightLossFilterService'];
function ShoppingListControllerController($rootScope, $element, $q, WeightLossFilterService){
  var $ctrl = this;
  var totalItem;

  $ctrl.cookiesInList = function(){
    for(var i = 0; i < $ctrl.items.length; i++){
      var name = $ctrl.items[i].name;
      if(name.toLowerCase().indexOf('cookie') !== -1){
        return true;
      }
    }
      return false;
  };

// invoke everytime in diegest loop
  $ctrl.$doCheck = function(){
    if($ctrl.items.length !== totalItem){
      totalItem = $ctrl.items.length;

      $rootScope.$broadcast('shoppinglist: processing', {on : false});
      var promises = [];

      for(var i = 0; i < $ctrl.items.length; i++){
        promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
      }

      $q.all(promises)
      .then(function(result){
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      }).catch(function(result){
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      })
      .finally(function(){
        $rootScope.$broadcast('shoppingList:processing', {on:true});
      });
    }
  };

  $ctrl.remove = function(myIndex){
    $ctrl.onRemove({key : myIndex });
  };

}
WeightLossFilterService.$inject = ['$q','$timeout']
function WeightLossFilterService($q, $timeout){
  var service = this;

  service.checkName = function(name){
    var deferred = $q.defer();

    var result = {
      message: ""
    };

    $timeout(function(){
      if(name.toLowerCase().indexOf('cookie') === -1){
        deferred.resolve(result);
      }else{
        result.message = "stay away from cookie, Emily";
        deferred.reject(result);
      }
    },3000);
    return deferred.promise;
  };

  service.checkQuantity = function(quantity){
    var deferred = $q.defer();
    var result = {
      message: ""
    };

    $timeout(function(){
      if(quantity < 6){
        deferred.resolve(result);
      }else{
        result.message = "that's to much, Emily";
        deferred.reject(result);
      }
    },1000);

    return deferred.promise;
  };
}


ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  console.log("ShoppingListController:: ",list.items);
  var origTitle = "Shopping List #1 ";
  list.title = origTitle + "(" +list.items.length +") items";


  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {

    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + "(" +list.items.length+") items";
  };

  list.removeItem = function(itemIndex) {
    console.log("'this' is : ", this);
    shoppingList.removeItem(itemIndex);
    list.title = origTitle + "(" +list.items.length+") items";

  };
}

// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
