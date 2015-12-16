angular.module('alApp').controller('blogController', function($scope,$http) {
	$scope.blogs = [];
	game.get().then(
		function(sucess)
		{
			$scope.blogs = data;
			console.log("success side");
		},
		function(error)
		{
			console.log("error side");
		});
})
