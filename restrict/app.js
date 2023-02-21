(function () {
'use strict';

angular.module('ShoppingListDirectiveApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory)
.controller('ShoppingListDirectiveController', ShoppingListDirectiveController)
.directive('shoppingList', ShoppingListDirective);


function ShoppingListDirective(){
  var ddo = {
      templateUrl: 'shoppingList.html',
      scope:{
        items:'<',
        myTitle:'@title',
        badRemove: '=',
        onRemove: '&' // reference binding

      },
      controller: ShoppingListDirectiveController,
      controllerAs: 'list',
      bindToController: true,
      link : ShoppingListDirectiveLink,
      transclude: true
  };
  return ddo;
}

function ShoppingListDirectiveController(){
  var list = this; // same sa controllerAs

  list.cookiesInList = function(){
    for(var i = 0; i < list.items.length; i++){
      var name = list.items[i].name;
      if(name.toLowerCase().indexOf('cookie') !== -1)
        return true;
    }
    return false;
  };
}

function ShoppingListDirectiveLink(scope, elemeny, attrs, controller){
  console.log('Link scope is: ', scope);
  console.log('Controller instace is : ', controller);
  console.log('Element is: ', element);

  scope.$watch('list.cookiesInList()', function(newValue, oldValue){
    console.log("Old value: ", oldValue);
    console.log("New value: ", newValue);

    if(newValue === true){
      displayCookieWarning();
    }else{
      removeCookieWarning();
    }
  });

  function displayCookieWarning(){
    // using angular jqLite
    // var warningElem = element.find('div');
    // console.log(warningElem);
    // warningElem.css('display','block');

    // jquery included before angular
    var warningElem = element.find('div.error');
    warningElem.slideDown(900);
  }

  function removeCookieWarning(){
    // var warningElem = element.find('div');
    // warningElem.css('display','none');
    var warningElem = element.find('div.error');
    warningElem.slideUp(900);
  }
}



// function ShoppingList(){
//   var ddo = {
//     templateUrl : 'shoppingList.html',
//     scope:{
//       list : '=myList',
//       title: '@title'
//     }
//   };
//
//   return ddo;
// }


//
// function ListItem() {
//   var ddo = {
//     restrict: "E",
//     templateUrl: 'listItem.html'
//   };
//
//   return ddo;
// }
//
//
// function ListItemDescription() {
//   var ddo = {
//     template: '{{ item.quantity }} of {{ item.name }}'
//   };
//
//   return ddo;
// }


// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1 ";
  list.title = origTitle + "(" +list.items.length +") items";


  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {

    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + "(" +list.items.length+") items";
  };

  list.removeItem = function (itemIndex) {
    console.log("'this' is : ", this);
    this.lastRemoved = "Last item removed was "+this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    list.title = origTitle + "(" +list.items.length+") items";

  };
}


// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list.items = shoppingList.getItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    try {
      shoppingList.addItem(list.itemName, list.itemQuantity);
    } catch (error) {
      list.errorMessage = error.message;
    }

  };

  list.removeItem = function (itemIndex) {
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
