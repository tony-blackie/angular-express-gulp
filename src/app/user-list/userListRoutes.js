(function() {
    "use strict";

    angular
        .module('user-list', ['ui.router'])
        .config('userListRoutes', userListRoutes);

    userListRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function userListRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../user-list.html',
                controller: 'UserListController as userListCtrl'
            })
    }
})();