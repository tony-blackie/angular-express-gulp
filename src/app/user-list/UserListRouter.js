UserListRoutes.$inject = ['$stateProvider'];

export default function UserListRoutes($stateProvider) {
	$stateProvider
		.state('userList', {
			url: '/users',
			templateUrl: require('./user-list.html'),
			controller: UserListController,
			controllerAs: userListCtrl
		});
}
