'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:RandomCtrl
 * @description
 * # RandomCtrl
 * Controller of the sputifyAngularJsApp
 */
angular.module('sputifyAngularJsApp')
  .controller('RandomCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
