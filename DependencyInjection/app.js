// (function(){
//   angular.module("DIApp",[])
//   .contoller('DiController', ['$scope', '$filter', DIController]);
//
//   function DIController($scope, $filter, $injector){
//     $scope.name = "Emilija";
//
//     $scope.upper = function(){
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     }
//     console.log($injector.annotate(DIController))
//   };
//
//
//
//   function AnnonateMe(name, job, blah){
//     return "Blah!";
//   }
//   console.log(AnnonateMe());
//   console.log(DIController.toString());
// })();
!function(){function n(o,e,l){o.name="Emilija",o.upper=function(){var n=e("uppercase");o.name=n(o.name)}}function o(n,o,e){return"Blah!"}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",n]),console.log("Blah!"),console.log(n.toString())}();
