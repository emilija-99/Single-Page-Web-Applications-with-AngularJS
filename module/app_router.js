(function(){
  'use strict';

  angular.module('ShoppingList').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
      url:'/',
      templateUrl:'src/shoppinglist/templates/home/home.template.html'
    }).state('minList',{
      url:'/main-list',
      templateUrl:'src/shoppinglist/templates/main-shoppinglist.template.html',
      controller: 'MainShoppingListController as mainList'
    });
  }
})();
