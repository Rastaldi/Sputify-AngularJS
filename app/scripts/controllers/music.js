'use strict';

/**
 * @ngdoc function
 * @name sputifyAngularJsApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the sputifyAngularJsApp
 */
angular.module('sputifyAngularJsApp')
  .controller('MusicCtrl', function ($scope) {
  	$scope.generos = ["Rock", "Pop", "Metal"];
    $scope.datosAjax = [
                    {id:1, genero: "Rock, All", anio:"1995", titulo:"Nevermind", artista:"Nirvana", precio:"25€ - ", libras:"23£", src:"http://assets.rollingstone.com/assets/images/gallery/fa16db09cdb1b7f4393ca3dd56a914a5cb09451b.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:2, genero: "Rock, All", anio:"1995", titulo:"Dark side of the moon", artista:"Pink Floyd", precio:"25€ - ", libras:"23£", src:"http://assets.rollingstone.com/assets/images/gallery/57d786c16e9c0bfd910677c0f779e843b093afa2.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:3, genero: "Pop, All", anio:"1990", titulo:"Abbey Road", artista:"The Beathels", precio:"25€ - ", libras:"23£", src:"http://assets.rollingstone.com/assets/images/gallery/76c9bb47fe3d39d006d36ab13c1a677351468b6a.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:4, genero: "Rock, All", anio:"1998", titulo:"The Velvet Underground", artista:"The Velvet", precio:"25€ - ", libras:"23£", src:"http://assets.rollingstone.com/assets/images/gallery/e569415749457a65514cfe8b509d7ead8b7b4013.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:5, genero: "Rock, All", anio:"2000", titulo:"Riot", artista:"Paramore", precio:"25€ - ", libras:"23£", src:"http://farm3.static.flickr.com/2399/2258126869_9fc6230d33_o.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:6, genero: "Rock, All", anio:"1995", titulo:"Californication", artista:"Red Hot Chili Peppers", precio:"25€ - ", libras:"23£", src:"http://farm3.static.flickr.com/2019/2258120391_41dc6dddf1_o.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:7, genero: "Rock, All", anio:"2005", titulo:"American Idiot", artista:"Green Day", precio:"25€ - ", libras:"23£", src:"http://farm3.static.flickr.com/2184/2258920730_688650fea3_o.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:8, genero: "Rock, All", anio:"2003", titulo:"Evil Machine", artista:"Rage Against the M.", precio:"25€ - ", libras:"23£", src:"http://farm3.static.flickr.com/2004/2258923486_8b33e9e907_o.jpg", tracklist:["Nights in the Dark", "Red Planet", "Shadow of the Colossus", "Lonely Wanderer ", "Acid Wash", "Faces In Crowd (Mr Noah EP) ", "Untying the Knot", "Tropic of Cancer", "Like Spinning Plates ", "Fool for Life", " Man On the Skyfire", " Better Half of Me" ]},
                    {id:9, genero: "Pop, All", anio:"2014", titulo:"1000 Forms of Fear", artista:"Sia", precio:"13,26", libras:"18,32", src:"http://www.billboard.com/files/styles/promo_650/public/media/sia-1000-forms-of-fear-650.jpg", tracklist:["Chandelier", "Big Girls Cry", "Burn the Pages", "Eye of the Needle", "Hostage", "Straight for the Knife", "Fair Game", "Elastic Heart", "Free the Animal", "Fire Meet Gasoline", "Cellophane" ]}, 
                	{id:10, genero: "Pop, All", anio:"2015", titulo:"Beyonce", artista:"Beyonce", precio:"17,50", libras:"21", src:"https://nsoracle.files.wordpress.com/2014/02/beyonce-album-cover-20131.jpg", tracklist:["Pretty Hurts", "Ghost/Haunted", "Drunk in Love (feat. Jay-Z)", "Blow", "No Angel", "Yoncé/Partition", "Jealous", "Rocket", "Mine (feat. Drake)", "XO", "***Flawless (feat. Chimamanda Ngozi Adichie)", "Superpower (feat. Frank Ocean)", "Heaven",  "Blue (feat. Blue Ivy)" ]}, 
                	{id:11, genero: "Pop, All", anio:"2015", titulo:"Rebel Heart", artista:"Madonna", precio:"21,99", libras:"25", src:"", tracklist:["Living For Love", "Devil Pray", "Ghosttown", "Unapologetic Bitch", "Illuminati", "Bitch I'm Madonna (feat. Nicki Minaj)", "Hold Tight", "Joan of Arc", "Iconic (feat. Chance the Rapper & Mike Tyson)", "HeartBreakCity", "Body Shop", "Holy Water", "Inside Out", "Wash All Over Me", "Best Night", "Veni Vidi Vici (feat. Nas)", "S.E.X.", "Messiah", "Rebel Heart", "Beautiful Scars", "Queen", "Borrowed Time", "Graffiti Heart", "Autotune Baby", "Addicted" ]}, 
                	{id:12, genero: "Pop, All", anio:"2011", titulo:"4", artista:"Beyonce", precio:"19,39", libras:"23,99", src:"http://hiphop-n-more.com/wp-content/uploads/2011/05/beyonce-4.jpg", tracklist:["1+1", "I Care", "I Miss You", "Best Thing I Never Had", "Party(feat André 3000)", "Rather Die Young", "Start Over", "Love on Top", "Countdown", "End of Time", "I Was Here", "Run the World (Girls)" ]}, 
                	{id:13, genero: "Pop, All", anio:"2011", titulo:"Talk That Talk", artista:"Rihanna", precio:"11,99", libras:"14,99", src:"http://hiphop-n-more.com/wp-content/uploads/2011/10/rihanna-talk-that-talk-cover.jpg", tracklist:["You Da One (Explicit)", "Where Have You Been", "We Found Love", "Talk That Talk feat. Jay-Z", "Cockiness (Love It)", "Birthday Cake", "We All Want Love", "Drunk On Love", "Roc Me Out", "Watch N Learn", "Farewell", "Red Lipstick", "Do Ya Thang", "Fool In Love", "We Found Love feat. Calvin Harris (Extended Mix)" ]} 
 /**               	{id:14, genero: "Pop, All", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:15, genero: "Pop, All", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:16, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:17, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:18, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:19, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:20, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:21, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:22, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:23, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:24, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:25, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:26, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:27, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:28, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:29, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}, 
                	{id:30, genero: "", anio:"", titulo:"", artista:"", precio:"", libras:"", src:"", tracklist:["", "", "", "", "", "", "", "", "", "", "", "" ]}
*/                	
                ];

            $scope.currentGenero = "All";

            $scope.setCurrentGenero = function (genero){
            	$scope.currentGenero = genero;
            }
  });
