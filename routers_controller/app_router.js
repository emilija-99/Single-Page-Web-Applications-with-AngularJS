(function(){
  angular.module('RoutingApp',['ui.router']);

  angular.module('RoutingApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/tab1');

    //set up IU states
    $stateProvider.state('tab1',{
      url:'/tab1',
      templateUrl: 'src/tab1.html'
    }).state('tab2',{
      url:'/tab2',
      tamplateUrl:'src/tab2.html'
    });
  }
})();
