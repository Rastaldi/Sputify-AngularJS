'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the sputifyAngularJsApp
 */

var app = angular.module('sputifyAngularJsApp', ['LocalStorageModule', 'firebase']);

app.controller('MusicCtrl', function ($scope, $http, $rootScope, localStorageService) {

    $scope.generos = ['Rock', 'Pop', 'Indie', 'Hip-Hop', 'All'];

      //nos traemos los datos del Json y lo guardamos en una variable scope
    localStorageService.set('datosJson', '');
    $rootScope.datosJson = [];
    $http.get('../scripts/controllers/datos.json').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $rootScope.datosJson = data;
        localStorageService.set('datosJson', $rootScope.datosJson);
    });


    // declaramos la variable genero inicializada a All y la funcion que nos cambia de genero
    localStorageService.set('currentGeneroLocal', 'All');
    $rootScope.currentGenero = localStorageService.get('currentGeneroLocal');

    $rootScope.setCurrentGenero = function (genero) {
        $rootScope.currentGenero = genero;
        localStorageService.set('currentGeneroLocal', $rootScope.currentGenero);
    };


    // necesitamos capturar el id del disco al que clicka
    localStorageService.set('currentIdLocal', '');
    $rootScope.currentId = localStorageService.get('currentIdLocal');

    $rootScope.setCurrentId = function (id) {
        $rootScope.currentId = id;
        localStorageService.set('currentIdLocal', $rootScope.currentId);
    };







  



});

//injectamos el controlador del chat

app.controller('ChatCtrl', function ($scope, $firebase) {

//nos conectamos a Firebase
    var ref = new Firebase("https://sputifydb.firebaseio.com/comentarios");
    var sync = $firebase(ref);

    //$scope.comentarios = [];
    $scope.comentarios = sync.$asArray();

    //var refLog = new Firebase("https://sputifydb.firebaseio.com/users");
    //var syncLog = $firebase(refLog);
    //$scope.usuarios = syncLog.$asArray();

    //funcion para agregar al chat  
    $scope.addComentario = function (nuevoComentario) {
        $scope.comentarios.$add({text: nuevoComentario, autor: $scope.currentUserNameLocal});
        //$scope.nuevoComentario = '';
    };

//2 intento de login
    $scope.login = function () {
        var displayBtn = document.getElementById('btn_logRegChat');
        displayBtn.style.display = 'none';

        var displayLogeo = document.getElementById('logeo_chat');
        displayLogeo.style.display = 'block';

    };

//nuevo login que antes era para registrate
    $scope.registrar = function () {

        var displayBtn = document.getElementById('btn_logRegChat');
        displayBtn.style.display = 'none';

        var displayReg = document.getElementById('registro_chat');
        displayReg.style.display = 'block';

    };

//la logica del logeo
    $scope.logeoChat = function (currentUserName, currentUserPass) {
        var refLogR = new Firebase('https://sputifydb.firebaseio.com/users');
        var syncLogR = $firebase(refLogR);

        $scope.usuarios = syncLogR.$asArray();

        for (var i = 0; i < $scope.usuarios.length; i++) {
            //el fallo esta aqui
            if ($scope.usuarios[i].user === currentUserName && $scope.usuarios[i].pass === currentUserPass) {
                $scope.currentUserNameLocal = currentUserName;
                $scope.currentUserPassLocal = currentUserPass;
                $scope.currentUserSrcLocal = $scope.usuarios[i].src;

                var displayLogeo = document.getElementById('logeo_chat');
                displayLogeo.style.display = 'none';

                var displayChatter = document.getElementById('visible');
                displayChatter.style.display = 'block';

            } else {
                var errorLogin = document.getElementById('error');
                errorLogin.style.display = 'block';
            }
        }
        //console.log($scope.usuarios);

    };
    // el registro que es el nuevo login
    $scope.registroChat = function (currentUserName, currentUserPass, currentUserSrc) {

        var displayReg = document.getElementById('registro_chat');
        displayReg.style.display = 'none';

        var refLog = new Firebase('https://sputifydb.firebaseio.com/users');
        var syncLog = $firebase(refLog);
        $scope.usuarios = syncLog.$asArray();
        $scope.usuarios.$add({user: currentUserName, pass: currentUserPass, src: currentUserSrc});

        $scope.currentUserNameLocal = currentUserName;
        $scope.currentUserPassLocal = currentUserPass;
        $scope.currentUserSrcLocal = currentUserSrc;

        var displayChatter = document.getElementById('visible');
        displayChatter.style.display = 'block';


    };

});
