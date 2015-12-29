angular.module('alApp').controller('records.tribesController', function($scope,$http) {
	$scope.scores = {};

	// break out get requests into seperate file since there will be alot of them TODO
	// get all 5tribes scores
	$http.get('/api/tribes')
		.success(function(data)
		{
			$scope.scores = data;
		})
		.error(function(data) {
			console.log("ERROR: " + data);
		});

		$scope.submit = function() {
			$scope.newScore.total = $scope.newScore.gold +
															$scope.newScore.yellow +
															$scope.newScore.white +
															$scope.newScore.djinn +
															$scope.newScore.camel +
															$scope.newScore.palm +
															$scope.newScore.palace +
															$scope.newScore.resource;
			$http.post('/api/tribes', $scope.newScore)
				.success(function(data)
			{
				alert("Score added");
			})
			.error(function(data){
				alert("ERROR: " + data);
			});
		};
});
