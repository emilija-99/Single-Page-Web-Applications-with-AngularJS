(function(){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves', LoveFilter)
  .filter('truth', TruthFilter);

MsgController.$inject = ['$scope','$filter', 'lovesFilter'];

  function MsgController($scope, $filter, lovesFilter){
    $scope.name = "Emilija";
    $scope.stateOfBegin = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage = function(){
      var msg = "Emilija likes to eat healthy snacks at night!";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.feedEmilija = function(){
        $scope.stateOfBegin = "fed";
    };

    $scope.sayLovesMessage = function(){
        var msg = "Emilija likes to eat healthy snacks at night!";
        msg = lovesFilter(msg);
        return msg;
    };
  }

  function LoveFilter(){
      return function(input){
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
      }
  };

  function TruthFilter(){
    return function(input, targer, repl){
      input = input || "";
      input = input.replace(targer, repl);
      return input;
    }
  }
})();
