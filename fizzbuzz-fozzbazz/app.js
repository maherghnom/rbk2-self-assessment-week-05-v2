angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */
 
  .factory('counter', function(){

  })
  .controller('fizzbuzzCtrl', function($scope){
      $scope.ctr=0
      $scope.display = 0;
      $scope.increment=function(){
        if ($scope.ctr%3===0){
          $scope.display="FIZZ"
        }
         if($scope.ctr%5===0){
          $scope.display="BUZZ"
        }
         if($scope.ctr%5===0 && $scope.ctr%3===0){
          $scope.display="FIZZBUZZ"
        }
        else{
          $scope.display=$scope.ctr
        }
        $scope.ctr+=1
       }
       
  })
  .controller('fozzbazzCtrl', function($scope){
     $scope.display = 0;
      $scope.increment=function(){
        
        $scope.display+=1;
       }

  });
