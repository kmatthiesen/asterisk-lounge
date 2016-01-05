/* to test use localhost:8080/HTML_AL.html*/


angular.module('alApp', ['ui.router','ngResource','chart.js']);

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

		// state for tribes child of records
		.state('records.tribes', {
			templateUrl : '/Pages/records.tribes.html',
			controller: 'records.tribesController'
		})

		// state for wonders child of records
		.state('records.wonders', {
			templateUrl : '/Pages/records.wonders.html',
			controller : 'records.wondersController'
		})

		// state for empires child of records
		.state('records.empires', {
			templateUrl : 'Pages/records.empires.html',
			controller : 'records.empiresController'
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
		controller : 'blogController'
	})// .run might be able to be used to make it start at home TO DO

	// state for the admin page
	.state('admin', {
		url : '/admin',
		templateUrl : '/Pages/admin.html',
		controller : 'adminController'
	})
});
