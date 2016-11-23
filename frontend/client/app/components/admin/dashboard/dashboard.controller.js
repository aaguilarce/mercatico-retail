'use strict';

class DashboardController {

  constructor(Authentication, $state) {
    var vm = this;

    vm.isLoggedIn = Authentication.isLoggedIn();
    vm.currentUser = Authentication.currentUser();

    vm.logout = function () {
      Authentication.logout();
      $state.go('home');
    }
  }
}

DashboardController.$inject = ['Authentication', '$state'];

export {DashboardController};
