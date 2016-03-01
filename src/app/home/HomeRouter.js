function routes($stateProvider) {
	"use strict";
	$stateProvider
		.state('home', {
			url: '/',
			template: require('./home.html'),
			controller: 'HomeController',
			controllerAs: 'homeCtrl'
		});
}