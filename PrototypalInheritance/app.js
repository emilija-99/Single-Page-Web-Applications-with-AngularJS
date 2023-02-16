//
// var parent = {
//   value : "parentValue",
//   obj:{
//     objValue: "prentObjValue"
//   },
//   walk : function(){
//     console.log("walking");
//   }
// };
//
// var child = Object.create(parent);
// console.log("Child - child.value :", child.value);
// console.log("Child - child.obj.objValue : ", child.obj.objValue);
// console.log("Parent - parent.value : ", parent.value);
// console.log("Parent - parent.obj.objValue : ", parent.obj.objValue);
// console.log("parent : ",parent);
// console.log("child : ", child);
// console.log("____________________________________________________________");
// child.value = "childValue"; // masking the value
// child.obj.objValue = "childObjValue"; // required to change obj
// console.log("***chenged*** Child - child.value : ",child.value);
// console.log("***changed*** Child - child.obj.objValue : ", child.obj.objValue);
// console.log("Child :: ",child);
// console.log("Parent :: ", parent);
//
// console.log("child.obj == parent.obj ? ",child.obj === parent.obj); //true
//
// var grandChild = Object.create(child);
// console.log("GrandsChild :",grandChild);
// grandChild.walk();
//
// // Function constructor
// function Dog(name){
//   this.name = name;
//   console.log("this is:", this);
// }
//
// var myDog = new Dog("Max");
// console.log("myDog :", myDog);

(function(){
  angular.module('ControlerApp', [])
  .controller('ParentController1', ParentController1)
  .controller('ChildController1', ChildController1)
  // .controller('ParentController2', ParentController2)
  // .contoller('ChildController2', ChildController2);

  ParentController1.$inject = ['$scope'];
  function ParentController1($scope){
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
  }

  ChildController1.$inject = ['$scope'];
  function ChildController1($scope){
    console.log("$scope.parentValue :", $scope.parentValue);
    console.log("Child $scope: ", $scope);

    $scope.parentValue = 5;
    console.log("*** Change : $scope.parentValue = 5 ***");
    console.log("$scope.parentValue :", $scope.parentValue);
  }
})();
