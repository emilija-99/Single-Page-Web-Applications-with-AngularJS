(function(){
  'use strict';

angular.module('NameCaluclator', [])

.controller('NameCaluclatorController', function($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
      var totalNameValue = calculateNumberiForString($scope.name);
      console.log($scope.name);
      console.log(totalNameValue);
      $scope.totalValue += totalNameValue;
    };


  function calculateNumberiForString(string){
    var totalStringValue = 0;
    for(var i = 0; i < string.length; i++){
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }
});
})();
