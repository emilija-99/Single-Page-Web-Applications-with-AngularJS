(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory);

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list1 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list1.items = shoppingList.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.addItem = function () {
    shoppingList.addItem(list1.itemName, list1.itemQuantity);
  }

  list1.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list2 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list2.items = shoppingList.getItems();

  list2.itemName = "";
  list2.itemQuantity = "";

  list2.addItem = function () {
    try {
      shoppingList.addItem(list2.itemName, list2.itemQuantity);
    } catch (error) {
      list2.errorMessage = error.message;
    }

  }

  list2.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
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
// (function(){
//   'use strict';
//   angular.module('ShoppingListApp', [])
//   .controller('ShoppingListController1', ShoppingListController1)
//   .controller('ShoppingListController2', ShoppingListController2)
//   .factory('ShoppingListFactory', ShoppingListFactory);
//
//   ShoppingListController1.$inject = ['ShoppingListFactory'];
//   function ShoppingListController1(ShoppingListFactory){
//     var list1 = this;
//
// // Use factory to create new ShoppingList
//     var shoppingList = ShoppingListFactory();
//
//     list1.items = shoppingList.getItems();
//     list1.name = "";
//     list1.quantity = "";
//
//     list1.addItem = function(){
//       shoppingList.addItem(list1.name, list1.quantity);
//
//     }
//
//     list1.removeItem = function(itemIndex){
//       shoppingList.removeItem(itemIndex);
//     }
//   }
//
//   ShoppingListController2.$inject = ['ShoppingListFactory'];
//   function ShoppingListController2(ShoppingListFactory){
//     var list2 = this;
//
//     var shoppingList = ShoppingListFactory(3);
//
//     list2.items = shoppingList.getItems();
//
//     list2.name = "";
//     list2.quantity = "";
//
//     list2.addItem = function(){
//       try{
//         shoppingList.addItem(list2.name, list2.quantity);
//       }catch(error){
//         list2.errorMessage = error.message;
//       }
//
//     }
//
//     list2.removeItem = function(itemIndex){
//       shoppingList.removeItem(itemIndex);
//     };
//   }
//
//
//   function ShoppingListService(maxItem){
//     var service = this;
//     var items = [];
//
//     service.addItem = function(name, quantity){
//       if((maxItem === undefined) ||
//     ((maxItem !== undefined) && (items.length < maxItem))){
//
//       var item = {
//         name: name,
//         quantity: quantity
//       };
//       console.log(item)
//       items.push(item);
//     }else{
//       throw new Error("Max items ("+maxItem+") reached.");
//     }
//   };
//
//     service.getItems = function(){
//       return items;
//     };
//
//     service.removeItem = function(itemIndex){
//       items.splice(itemIndex,1);
//     };
//   }
//
//   function ShoppingListFactory(){
//     var factory = function(maxItem){
//       return new ShoppingListService(maxItem);
//     };
//     return factory;
//   }
// })();

// .controller('ShoppingListController1', ShoppingListController1)
// .controller('ShoppingListController2', ShoppingListController2)
// .service('ShoppingListFa', ShoppingListService)
//
// // add
// ShoppingListAppController.$inject = ['ShoppingListService'];
// function ShoppingListAppController(ShoppingListService){
//   var itemAdder = this;
//
//   itemAdder.name = "";
//   itemAdder.quantity = "";
//
//   itemAdder.addItem = function(){
//     ShoppingListService.addItem(itemAdder.name, itemAdder.quantity);
//   }
// }
//
// // display
// ShoppingListShowController.$inject = ['ShoppingListService'];
// function ShoppingListShowController(ShoppingListService){
//   var showList = this;
//   showList.items = ShoppingListService.getItems();
//
//   showList.removeItem = function(itemIndex){
//     ShoppingListService.removeItem(itemIndex);
//   }
// }
