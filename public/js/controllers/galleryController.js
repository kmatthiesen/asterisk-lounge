angular.module('alApp').controller('galleryController', function($scope, instagram)
{
	$scope.layout = 'grid';

	$scope.pics = [];

	instagram.fetchPopular(function(data)
	{
		$scope.pics = data;
	});
})
