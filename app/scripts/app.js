'use strict';

/**
 * @ngdoc overview
 * @name sputifyAngularJsApp
 * @description
 * # sputifyAngularJsApp
 *
 * Main module of the application.
 */
var app = angular.module('sputifyAngularJsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/favoritos.html',
        controller: 'FavoritosCtrl'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
      })
      .when('/conciertos', {
        templateUrl: 'views/conciertos.html',
        controller: 'ConciertosCtrl'
      })
      .when('/favoritos', {
        templateUrl: 'views/favoritos.html',
        controller: 'FavoritosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
