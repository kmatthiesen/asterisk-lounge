var alApp = angular.module('alApp', ['ngRoute']);

alApp.config(function($routeProvider) {
    $routeProvider
    
    // route for the home page
    .when('/', {
	templateUrl : 'pages/home.html',
	controller  : 'mainController'
    })

    // route for the records page
    .when('/records', {
	templateUrl : 'pages/records.html',
	controller  : 'recordsController'
    })
});

alApp.controller('mainController', function($scope) {
    $scope.message = 'EVERYONE COME AND SEE HOW GOOD I LOOK!!!';
});

alApp.controller('recordsController', function($scope) {
    $scope.message = 'MAC IS A GOOBER!!!';
});
