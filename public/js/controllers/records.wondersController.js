angular.module('alApp').controller('records.wondersController', function($scope,$http) {
	$scope.scores = {};

	$scope.labels = ["Military", "Money", "Debt", "Wonder", "Civic", "Commerce", "Science", "Guild", "Leaders"];
	  $scope.series = [];
	  $scope.data = [];

	// break out get requests into seperate file since there will be alot of them TODO
	// get all 5tribes scores
	$http.get('/api/wonders')
		.success(function(data)
		{
			$scope.scores = data;
		})
		.error(function(data) {
			console.log("ERROR: " + data);
		});

		$scope.submit = function() {
			$scope.newScore.total = Number($scope.newScore.military) +
															Number($scope.newScore.money) +
															Number($scope.newScore.debt) +
															Number($scope.newScore.wonder) +
															Number($scope.newScore.civic) +
															Number($scope.newScore.commerce) +
															Number($scope.newScore.science) +
															Number($scope.newScore.guild) +
                              Number($scope.newScore.leaders);
			$http.post('/api/wonders', $scope.newScore)
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
				$scope.data.push([score.military,score.money,score.debt,score.wonder,score.civic,score.commerce,score.science,score.guild,score.leaders]);
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
