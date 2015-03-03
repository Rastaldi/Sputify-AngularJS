'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the sputifyAngularJsApp
 */
var app = angular.module('sputifyAngularJsApp', ['firebase']);

  app.controller('ChatCtrl', function ($scope, $firebase) {
    	

    var ref = new Firebase("https://sputifydb.firebaseio.com/comentarios");
    var sync = $firebase(ref);

     //$scope.comentarios = [];
    $scope.comentarios = sync.$asArray();

    //var refLog = new Firebase("https://sputifydb.firebaseio.com/users");
    //var syncLog = $firebase(refLog);
    //$scope.usuarios = syncLog.$asArray();


    $scope.addComentario = function(nuevoComentario){
    	$scope.comentarios.$add({text: nuevoComentario, autor: $scope.currentUserNameLocal});
    	//$scope.nuevoComentario = '';
    };


    $scope.login = function(){
    	var displayBtn = document.getElementById('btn_logRegChat'); 
    	displayBtn.style.display='none';

    	var displayLogeo = document.getElementById('logeo_chat'); 
    	displayLogeo.style.display='block';

    };

    $scope.registrar = function(){
    	
    	var displayBtn = document.getElementById('btn_logRegChat'); 
    	displayBtn.style.display='none';

    	var displayReg = document.getElementById('registro_chat'); 
    	displayReg.style.display='block';

    };


    $scope.logeoChat = function(currentUserName, currentUserPass){
    	
    	
    	var refLogR = new Firebase('https://sputifydb.firebaseio.com/users');
    	var syncLogR = $firebase(refLogR);

		$scope.usuarios = syncLogR.$asArray();
		
		for (var i = 0; i < $scope.usuarios.length; i++){
			
			if($scope.usuarios[i].user === currentUserName && $scope.usuarios[i].pass === currentUserPass){
				
				$scope.currentUserNameLocal = currentUserName;
    			$scope.currentUserPassLocal = currentUserPass;
    			$scope.currentUserSrcLocal = $scope.usuarios[i].src;

    			var displayLogeo = document.getElementById('logeo_chat'); 
    			displayLogeo.style.display='none';

				var displayChatter = document.getElementById('visible');  
    			displayChatter.style.display='block';

			}else {
				var errorLogin = document.getElementById('error');
				errorLogin.style.display='block';
			}
		}
		console.log($scope.usuarios);

    };

    $scope.registroChat = function(currentUserName, currentUserPass, currentUserSrc){
    	
    	var displayReg = document.getElementById('registro_chat'); 
    	displayReg.style.display='none';

    	var refLog = new Firebase('https://sputifydb.firebaseio.com/users');
    	var syncLog = $firebase(refLog);
    	$scope.usuarios = syncLog.$asArray();
    	$scope.usuarios.$add({user: currentUserName, pass: currentUserPass, src: currentUserSrc});

    	$scope.currentUserNameLocal = currentUserName;
    	$scope.currentUserPassLocal = currentUserPass;
    	$scope.currentUserSrcLocal = currentUserSrc;
		
		var displayChatter = document.getElementById('visible'); 
    	displayChatter.style.display='block';


    };

  });
