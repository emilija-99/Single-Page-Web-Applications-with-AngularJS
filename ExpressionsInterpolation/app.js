(function (){
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController );

MsgController.$inject = ['$scope'];

  function MsgController($scope){
    $scope.name = "Emilija";
    $scope.stateOfBeign = "noteaten";

    $scope.FeedEmilija = function(){
      $scope.stateOfBeign = "eaten";
    }
    $scope.sayMessage = function(){
      return "Emilija likes to eat healty snack in night.";
    }


  }

})();
