'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:FavoritosCtrl
 * @description
 * # FavoritosCtrl
 * Controller of the sputifyAngularJsApp
 */
angular.module('sputifyAngularJsApp')
  .controller('FavoritosCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
