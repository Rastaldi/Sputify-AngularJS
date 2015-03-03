'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the sputifyAngularJsApp
 */
var app = angular.module('sputifyAngularJsApp', ['spotify']);
		
    //conectamos a Spotify con clave de desarrollador
	app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('51360a88d15e469e9831831b4414a9d4');
    SpotifyProvider.setRedirectUri('http://localhost:9000/views/music.html');
    SpotifyProvider.setScope('playlist-read-private');
  });

  app.controller('SearchCtrl', ['$scope', 'Spotify', function ($scope, Spotify) {

  	//$scope.album = [{"image": [''], "titulo": ['']}];
  	$scope.image = [];
   	$scope.titulo = [];

//buscamos en la API el artista que nos introduzcan en el input
   $scope.searchArtist = function (artist){
   		$scope.searchResult = Spotify.search($scope.artist, 'album', {limit:50}).then(function (data) {
  			
        //del mega array que nos devuelve nos quedamos con lo que nos interesa
  			$scope.albumSearch = data.albums.items;
  				//console.log($scope.albumSearch);
  			for (var i = 0; i < $scope.albumSearch.length; i++ ){
  				$scope.image.push($scope.albumSearch[i].images[0].url);
  				$scope.titulo.push($scope.albumSearch[i].name);
  				}
  				
		//console.log($scope.albumSearch);
   		//$scope.loadSearch();
   	    });
   		$scope.image = [];
   		$scope.titulo = [];
   	};

    // para que al pulsar en un album te salga la traclist
   	$scope.description = function(href) {

   		$scope.trackSearch = [];
   		
   		for (var i = 0; i < $scope.albumSearch.length; i++ ){
  			if (href === $scope.albumSearch[i].images[0].url) {
  				$scope.idAlbum = $scope.albumSearch[i].id;
  			}else {}		
  		}

  		$scope.trackSearch = [];
        //con esta llamada a la API nos traemos las canciones
  		$scope.resultAlbum = Spotify.getAlbumTracks($scope.idAlbum).then(function (data) {
  		$scope.resultAlbum = data.items;
			for (var m = 0; m < $scope.resultAlbum.length; m++ ){
  				$scope.trackSearch.push($scope.resultAlbum[m].name);
  				//console.log($scope.resultAlbum[m].name);
  			}
	console.log($scope.trackSearch);
  		//$scope.crearTracList();

		});

  		//var divRepeat = document.createElement('div');
  		//divRepeat.setAtribute('ng-repeat', 'tr in trackSearch track by $id($index)');
  		//$scope.crearTracList = function(){
	  	//	var divTracklistTrack = document.createElement('div');
	  	//	divTracklistTrack.setAtribute('id', 'tracklist_tracks');

	  	//	var aTrack = document.createElement('a');
	  	//	aTrack.setAtribute('href', '');
	  	//	aTrack.setAtribute('id', 'tracklist_tracks_link');

	  	//	var TxtATrack = document.createTextNode('{{tr}}');

	  	//	aTrack.appendChild($scope.TxtATrack);
	  	//	divTracklistTrack.appendChild(aTrack);
	  	//	document.getElementById('track_search').appendChild(divTracklistTrack);
  		//};
  	
   	};

  }]);
