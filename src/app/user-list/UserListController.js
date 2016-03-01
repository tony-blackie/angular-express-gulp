(function() {
	"use strict";

	angular
		.module('user-list')
		.controller('UserListController', UserListController);

	function UserListController() {
		var vm = this;
		angular.extend(vm, {
			getSomeList: getSomeList
		});

		function getSomeList() {
			alert('8');
		}
	}
})();