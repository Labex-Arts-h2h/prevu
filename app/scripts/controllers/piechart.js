'use strict';

angular.module('prevuApp')
  .controller('PiechartCtrl', function ($scope) {
  $scope.xFunction = function() {
    return function(d) {
      return d.sex;
    };
  }
  $scope.xFunctionCatCode = function() {
    return function(d) {
      return d.categorycode;
    };
  }

  $scope.yFunction = function(t) {
    return function(d) {
      return d.count;
    };
  }
 });
