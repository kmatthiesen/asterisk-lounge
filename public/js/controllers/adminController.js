/** Controller for the admin page,
 *  currently will list all games in the mongodb and give the option to crud
 *  eventually will list all the games and records
 */
angular.module('alApp').controller('adminController', function($scope,$http) {

  // get all games
	$http.get('/api/games')
			.success(function(data) {
				// now display the games on the page
				$scope.games = data;
			})
			.error(function(data) {
				console.log("ERROR: " + data);
			});

  // called when a delete button is pressed, sends a delete http request
  // for the entry for which the button was pressed
  $scope.delete = function($event)
  {
	//	console.log("DELETE CALLED  " + $event.target.id);
   $http.delete('/api/games/' + $event.target.id)
        .success(function(data) {
					console.log(data);
        })
        .error(function(data) {
					console.log("ERROR:  " + data);
        });
  }

  // called when a update button is pressed, sends a put http request
  // for the entry for which the button was pressed
  // will pop up a form to get the new information TODO
  $scope.update = function($event)
  {
	//	console.log("update called");
		var game = new Game();
		$http.get('/api/games/' + $event.target.id)
			.success(function(data) {
				game = data; // might have to break this out to do it by field
			})
			.error(function(data)  {
				console.log("ERROR:  " + data;)
			});


  }
});

// helper function to bring up a window with a form to update a game,
// form gets populated with the values of the game being updated
// possibly turn this into a service
var updatePopUp = function(game) {

}
