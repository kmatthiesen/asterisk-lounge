//var mychart = {};
angular.module('alApp').controller('records.tribesController', function($scope,$http) {
	$scope.scores = {};

	$scope.labels = ["Gold", "Vizers", "Elders", "Djinn", "Camels", "Palms", "Palaces", "Resources"];
	  $scope.series = [];
	  $scope.data = [];

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

		$scope.toggleGraph = function(score) {
			var test = checkData(score, $scope.series);
			if(test > -1)
			{
				$scope.data.splice(test,1);
				$scope.series.splice(test,1);
			}else {
				$scope.series.push(score._id);
				$scope.data.push([score.gold,score.yellow,score.white,score.djinn,score.camel,score.palm,score.palace,score.resource]);
			}
		}
});


var checkData = function(score, series) {
	for(var i = 0; i < series.length; i++)
	{
		if(series[i] == score._id)
		{

			return i;
		}
	}
	return -1;
}
