(function(){
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', function($scope){
  $scope.name = "Emilija";
  $scope.sayHello = function(){
    return "Hello";
  }
})
})();
