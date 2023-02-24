(function(){
  'use strict';

  angular.module('ShoppingList')
  .component('shoppingList',{
    templateUrl: 'src/shoppinglist/shoppingList.template.html',
    bindings:{
      items: '<',
    
    }
  });


})();
