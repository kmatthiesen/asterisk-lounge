angular.module('alApp').controller('recordsController', function($scope) {
	$scope.toggleForm = function()
	{
		$scope.submitFormVis = !$scope.submitFormVis;
	}
});
