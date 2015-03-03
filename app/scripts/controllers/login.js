'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sputifyAngularJsApp
 */
 var app = angular.module('sputifyAngularJsApp', ['ngRoute', 'spotify']);

 app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('51360a88d15e469e9831831b4414a9d4');
    SpotifyProvider.setRedirectUri('http://localhost:9000/views/music.html');
    SpotifyProvider.setScope('playlist-read-private');
  });

 app.controller('LoginCtrl', ['$scope', 'Spotify', function ($scope, Spotify) {

    //logeo con SPOTIFY API
    $scope.login = function () {
      Spotify.login().then(function (data) {
        //console.log(data);
        $scope.container_login = document.getElementById('container_login');
        $scope.container_login.appendChild(data);

      });
    };

	
	
      
	$scope.arrayAlbums = [''];

	$scope.beyonceAlbumsF = Spotify.search('Beyonce', 'album').then(function (data) {
  	//console.log(data);
  	$scope.beyonceAlbums = data;
  		for (var i = 0; i < $scope.beyonceAlbums.length; i ++) {
  			$scope.arrayAlbums.push($scope.beyonceAlbums[i].items)
  		}
  		//$scope.arrayAlbums = $scope.beyonceAlbums.albums.items;
  	


  	
	});

	
	//$scope.nirvanaAlbumsF = Spotify.search('Nirvana', 'album').then(function (data) {
  	//$scope.nirvanaAlbums = data;
  	//$scope.arrayAlbums.push($scope.nirvanaAlbums.albums.items);
//});

	
	//console.log($scope.arrayAlbums);
	//console.log($scope.beyonceAlbums);
	//console.log('-->' + $scope.arrayAlbums);
	
	$scope.currentUser = Spotify.getCurrentUser().then(function (data) {
  console.log(data);
});

console.log($scope.currentUser);



		}]);
