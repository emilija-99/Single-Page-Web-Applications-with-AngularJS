(function(){
  'use strict';
  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController', ShoppingListController)
  .provider('ShoppingListServices', ShoppingListServicesProvider);

  ShoppingListController.$inject = ['ShoppingListServices'];
function ShoppingListController(ShoppingListServices){
    var list = this;

    list.items = ShoppingListServices.getItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItemm = function(){
        try{
          ShoppingListServices.addItem(list.itemName, list.itemQuantity);
        }catch(error){
          list.errorMessage = error.message;
        }
    };

    list.remove = function(itemIndex){
      ShoppingListServices.removeItem(itemIndex);
    };

  };

  function ShoppingListServices(maxItems){
    var items = [];
    var service = this;

    service.addItem = function(itemName, itemQuantity){
      if((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)){
        var item = {
          name: itemName,
          quantity: itemQuantity
        };
        console.log(item);
        items.push(item);
      }else{
        throw new Error("Max items ("+maxItems+") reached.");
      }
    };

    service.getItems = function(){
      return items;
    };

  };

  function ShoppingListServicesProvider(){
    var provider = this;

    provider.defaults = {
      maxItems : 10
    };

    provider.$get = function(){
        var shoppingList = new ShoppingListServices(provider.defaults.maxItems);
        return shoppingList;
    }
  }
})();

// not working
