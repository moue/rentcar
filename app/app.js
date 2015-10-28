'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'mobile-angular-ui',
  'datePicker'
])
.controller("CarsController", ['$scope', '$filter', function($scope,$filter) {
  var orderBy = $filter('orderBy');
  $scope.cars = [
    { id:6, type: "Compact", price: 10, pic:"imgs/compact.png"},
    { id:1, type: "Economy", price: 12, pic:"imgs/economy.png" },
    { id:2, type: "Full Size ", price: 15, pic:"imgs/full-size.png" },
    { id:3, type: "Convertible", price: 16, pic:"imgs/convertible.png" },
    { id:4, type: "Minivan", price: 17, pic:"imgs/minivan.png" },
    { id:5, type: "Luxury", price: 20, pic:"imgs/luxury.png"}
  ];
  $scope.reverse='true';
  $scope.predicate = 'price';
    $scope.order = function(predicate, reverse) {
    $scope.cars = orderBy($scope.cars, predicate, reverse);
  };
  $scope.order('cars',true);
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
