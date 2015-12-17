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
angular.module('alApp').controller('gamelistController', function($scope,$http) {
	$scope.games = {};
	$scope.submitFormVis = true;


	// get all games
	$http.get('/api/games')
			.success(function(data) {
				console.log(data);
				// now display the games on the page
				$scope.games = data;
			})
			.error(function(data) {
				console.log("ERROR: " + data);
			});

	$scope.upload = function(game)
	{
		$http.post("/api/game", game).success(function(game, status) {
            console.log("sent");
        })
		console.log("upload");
		console.log(game);
	}

	$scope.search = function(game)
	{
		console.log("search");
		console.log(game);
	}

	$scope.toggleForm = function()
	{
		$scope.submitFormVis = !$scope.submitFormVis;
	}
});
