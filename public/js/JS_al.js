/* to test use localhost:8080/HTML_AL.html*/


angular.module('alApp', ['ui.router','ngResource']);

angular.module('alApp').run(($rootScope) => {
	$rootScope.$on("stateChangeError", console.log.bind(console));
});


angular.module('alApp').config(function($stateProvider, $urlRouterProvider) {

//	$urlRouterProvider.otherwise('/home');

	$stateProvider

    // state for the home page
    .state('home', {
		url : '/home',
		templateUrl  : '/Pages/home.html',
		controller: 'mainController'
	})

    // state for the records page
    .state('records', {
		url : '/records',
		templateUrl  : '/Pages/records.html',
		controller : 'recordsController'
    })

	// state for the gamelist page
	.state('gamelist', {
		url : '/gamelist',
		templateUrl  : '/Pages/gamelist.html',
		controller : 'gamelistController'
	})

	// state for the photo gallery page
	.state('gallery', {
		url : '/gallery',
		templateUrl  : '/Pages/photoGallery.html',
		controller : 'galleryController'
	})

	// state for the blog page
	.state('blog', {
		url : '/blog',
		templateUrl  : '/Pages/blog.html',
	})// .run might be able to be used to make it start at home TO DO
});