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
});
