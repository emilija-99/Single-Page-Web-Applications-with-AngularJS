(function(){
  angular.module("CounterApp",[])
  .controller("CounterController", CounterController);

  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout){
    // $scope.onceCounter = 0;
    $scope.counter = 0;

    // $scope.showNumberOfWatchers = function(){
    //     console.log("# number of Watchers: ",$scope.$$watchersCount);
    //
    // }

    // $scope.countOnce = function(){
    //     $scope.onceCounter = 1;
    // }

    // $scope.upCounter = function(){
    //   setTimeout(function(){
    //     $scope.$apply(function(){
    //       $scope.counter++;
    //       console.log("Counter Increment");
    //     })
    //   },2000);
    // }

    $scope.upCounter = function(){
        $timeout(function(){
          $scope.counter++;
          console.log("Counter Increment");
        },2000);
    }

    // $scope.$watch(function(){
    //   console.log("Digest loop fired");
    // })
    // $scope.$watch('onceCounter', function(newVlaue, oldValue){
    //   console.log("onceCounter old value", oldValue);
    //   console.log("onceCounter new value", newVlaue);
    // })
    //
    // $scope.$watch('counter', function(newVlaue, oldValue){
    //   console.log("counter old value", oldValue);
    //   console.log("counter new value", newVlaue);
    // })

}
})();
