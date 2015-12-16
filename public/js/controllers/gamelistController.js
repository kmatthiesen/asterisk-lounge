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
	$scope.game = {};
	$scope.submitFormVis = true;

	$scope.upload = function(game)
	{
		$http.post("storage.txt", game).success(function(game, status) {
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
