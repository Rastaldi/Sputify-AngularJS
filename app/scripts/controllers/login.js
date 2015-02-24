'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sputifyAngularJsApp
 */
 var app = angular.module('sputifyAngularJsApp', ['ngRoute', 'firebase']);
 app.controller('LoginCtrl', ['$scope','$firebaseSimpleLogin' , function ($scope, $firebaseSimpleLogin) {

 	var sputyfyDB = new Firebase("https://sputifydb.firebaseapp.com");
 	var loginDB = $firebaseSimpleLogin(sputyfyDB);

 	$scope.SignIn = function($scope) {
 		var username = $scope.user.email;
 		var password = $scope.user.password;

 		loginDB.$login('password', {
 			email: username,
 			password: password
 		})
 		.then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
					    // Auth Logic will be here
		}			
				}]);
