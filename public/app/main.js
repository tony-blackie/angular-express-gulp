"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports["default"] = UserListRoutes;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = (function () {
	function HomeController(RandomNames) {
		"use strict";

		_classCallCheck(this, HomeController);

		this.name = 'Name';
		this.randomNames = RandomNames;
	}

	_createClass(HomeController, [{
		key: "changeName",
		value: function changeName() {
			"use strict";
			this.name = 'NewName';
		}
	}, {
		key: "getRandomName",
		value: function getRandomName() {
			"use strict";
			this.name = this.randomNames.getName();
		}
	}]);

	return HomeController;
})();

function routes($stateProvider) {
	"use strict";
	$stateProvider.state('home', {
		url: '/',
		template: require('./home.html'),
		controller: 'HomeController',
		controllerAs: 'homeCtrl'
	});
}

var UserListController = function UserListController() {
	_classCallCheck(this, UserListController);
};

UserListRoutes.$inject = ['$stateProvider'];

function UserListRoutes($stateProvider) {
	$stateProvider.state('userList', {
		url: '/users',
		templateUrl: require('./user-list.html'),
		controller: UserListController,
		controllerAs: userListCtrl
	});
}

module.exports = exports["default"];