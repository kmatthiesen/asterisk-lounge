/* to test use localhost:8080/HTML_AL.html*/


angular.module('alApp', ['ngRoute']);

angular.module('alApp').config(function($routeProvider) {
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

angular.module('alApp').controller('mainController', function($scope) {
	$scope.jumboTitle = 'The Asterisk Lounge';
});

angular.module('alApp').controller('recordsController', function($scope) {
	$scope.jumboTitle = 'Hall of Records';
});
/** controller for the games list, also has the form to add a game to the game list
 * 		add form has the following parts -
 *						name
 *						num players
 *						play time
 *						mechanics
 *
 *  	it takes the information and then saves it to disk as JSON
 *		will hopefully eventually save it to a database
 */
angular.module('alApp').controller('gamelistController', function($scope) {
	$scope.jumboTitle = 'List of Games';
	$scope.game = {};
	
	$scope.upload = function(game)
	{
		console.log(game);
		console.log($scope);
	}
});