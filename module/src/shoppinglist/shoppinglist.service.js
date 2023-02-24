(function(){
  'use strict'
  angular.module('ShoppingList').service('ShoppingListService', ShoppingListService);

  ShoppingListService.$inject = ['$q','$timeout'];
  function ShoppingListService($q, $timeout){
    var service = this;
    var items  = [];

    items.push({
      name: "sugar",
      quantity: '2 bags',
      description: "Sugar use for baking delicious meals.."
    });
    items.push({
      name:'flour',
      quantity:'1 bags',
      description: "high quality weat flour. mix it with wather, sugar, 2 raw eggs"
    });
    items.push({
      name: 'Chocolate Chips',
      quantity: '3 bags',
      description: 'Put these in the dough. No reason, really. Gotta store them somewhere!'
    });

    service.getItems = function(){
      var deferred = $q.defer();

      $timeout(function(){
        deffer.resolve(items);
      },800);
      return deffered.promise;
    };
  }

})();
