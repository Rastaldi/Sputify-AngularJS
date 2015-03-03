'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the sputifyAngularJsApp
 */

 var app = angular.module('sputifyAngularJsApp',['LocalStorageModule']);

 app.controller('PlayCtrl', function ($scope, $http, $rootScope, localStorageService) {
 		
 		//me traigo los datos del Json que guarde ya anteriormente en el LocalStorage
  		$scope.datosJsonPlay = localStorageService.get('datosJson');
  		
  		//me traigo tambien el id que selecciono el usuario
 		$scope.currentGeneroPlay = localStorageService.get('currentGeneroLocal');
		$scope.currentIdPlay = 	localStorageService.get('currentIdLocal');

		//recorro el array para quedarme con lo que me interesa
		for (var i = 0; i < $scope.datosJsonPlay.length; i ++) {
			if ($scope.datosJsonPlay[i].id === $scope.currentIdPlay) {
				$scope.srcImageFront = $scope.datosJsonPlay[i].image;
				$scope.srcImageBack = $scope.datosJsonPlay[i].image2;
				$scope.tracklist = $scope.datosJsonPlay[i].tracklist;
				$scope.artist = $scope.datosJsonPlay[i].artista;
				$scope.youtube = $scope.datosJsonPlay[i].youtube;
				console.log($scope.youtube);
			}
		}

		//añado el src del iframe de youtube

		var iframe = document.getElementById('iframe');
		iframe.setAttribute('src', $scope.youtube);

		//aqui le añado al cd que da vueltas las imagenes
		var imagePlayFront = document.getElementById('front');
		imagePlayFront.style.background='url(' + $scope.srcImageFront + ') no-repeat top left';
 
		var imagePlayBack = document.getElementById('back');
		imagePlayBack.style.background='url(' + $scope.srcImageBack + ') no-repeat top left';

		
		//la reproduccionm de la musica
		$scope.reproduciendo = false;
    	$scope.playTrack = function (trackSrc){
    		//si no esta sonando nada crea la etiqueta audio y reproduce la cancion
    		if ($scope.reproduciendo === false) {
    			$scope.audioTrack = document.createElement('audio');
	    		$scope.audioTrack.setAttribute('class', 'trackSrc');
	    		$scope.audioTrack.setAttribute('autoplay', 'true');
	    		$scope.audioTrack.setAttribute('src', trackSrc);

	    		$scope.reproduciendo = true;
    		} else {
    			// si ya hay algo reproduciendose se para
    			$scope.audioTrack.pause();
    			$scope.reproduciendo = false;
    		}
    		
    		//$scope.stopBtn = document.createElement('button');
    		//$scope.stopBtn.setAttribute('ng-click', 'stopTrack()')
    		//var txtBtn = document.createTextNode('STOP');
    		//$scope.stopBtn.appendChild(txtBtn);

    		//document.getElementById('tracklist_tracks_link').appendChild($scope.stopBtn);
    		//document.getElementById('tracklist_tracks').appendChild($scope.audioTrack);

    	};	
    	//$scope.stopTrack = function (){
    	//	$scope.audioTrack.pause();
		//};


		//$scope.youtube = document.createElement('iframe');
		//$scope.youtube.setAttribute('src', $scope.youtube);
		//$scope.youtube.setAttribute('autoplay', 'false');
		//$scope.youtube.setAttribute('loop', 'true');
		//$scope.youtube.setAttribute('height', '360');
		//$scope.youtube.setAttribute('width', '640');
		

		//document.getElementById('video_youtube').appendChild($scope.youtube);

		

		//para que al pinchar en relacionados te se actualize el id que selecciono el user
			$rootScope.setCurrentGenero = function (genero){
    $rootScope.currentGenero = genero;
    localStorageService.set('currentGeneroLocal', $rootScope.currentGenero);
  };



  localStorageService.set('currentIdLocal', '');
  $rootScope.currentId = localStorageService.get('currentIdLocal');

  $rootScope.setCurrentId = function(id){
     $rootScope.currentId = id;
     localStorageService.set('currentIdLocal', $rootScope.currentId);
  };


 });