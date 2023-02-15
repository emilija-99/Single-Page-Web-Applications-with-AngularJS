(function(){

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.state = 0;
    $scope.display = "";

    $scope.countItems = function(){
      var number = 0;
      var listOfItems = $scope.items.split(',');

      for(var i = 0; i < listOfItems.length; i++){
        number+=1;
      }

      return number;
    }

    $scope.message = function()
    {
          $scope.state = 1;
          var message = "Plase Enter data first!";
          if($scope.countItems() <= 3 && $scope.countItems() > 1){
            message = "Enjoy!";
          }else if($scope.countItems() >= 3){
            message = "To Much!";
          }

          if($scope.state == 1){
              $scope.display = message;

          }
    }



}
})();
