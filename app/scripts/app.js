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
    'angularFireProvider',
    'firebase'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .when('/callback', {
        templateUrl: 'views/callback.html',
        controller: 'LoginCtrl'
      })
        .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
