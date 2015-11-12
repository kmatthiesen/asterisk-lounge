
var alApp = angular.module('alApp', ['ngRoute']);

alApp.config(function($routeProvider) {
    $routeProvider
    
    // route for the home page
    .when('/', {
	templateUrl : 'pages/home.html',
	controller  : 'mainController'
    })

    // route for the records page
    .when('/records', {
	templateUrl : 'pages/records.html',
	controller  : 'recordsController'
    })
	
	// route for the gamelist page
	.when('/gamelist', {
		templateUrl : 'pages/gamelist.html',
		controller  : 'gamelistController'
	})
});

alApp.controller('mainController', function($scope) {
	$scope.jumboTitle = 'The Asterisk Lounge';
});

alApp.controller('recordsController', function($scope) {
	$scope.jumboTitle = 'Hall of Records';
});
/** controller for the games list, also has the form to add a game to the game list
 * 		add form has the following parts -
 *						name
 *						num players
 *						
 *  	it takes the information and then saves it to disk as JSON
 *		will hopefully eventually save it to a database
 */
alApp.controller('gamelistController', function($scope) {
	$scope.jumboTitle = 'List of Games';
});