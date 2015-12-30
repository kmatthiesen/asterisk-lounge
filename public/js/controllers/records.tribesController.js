angular.module('alApp').controller('records.tribesController', function($scope,$http) {
	$scope.scores = {};

	$scope.labels = ["Gold", "Vizers", "Elders", "Djinn", "Camels", "Palms", "Palaces", "Resources"];
	  $scope.series = ['Series A', 'Series B'];
	  $scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
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
			$scope.newScore.total = Number($scope.newScore.gold) +
															Number($scope.newScore.yellow) +
															Number($scope.newScore.white) +
															Number($scope.newScore.djinn) +
															Number($scope.newScore.camel) +
															Number($scope.newScore.palm) +
															Number($scope.newScore.palace) +
															Number($scope.newScore.resource);
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
