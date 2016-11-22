import _ from 'lodash';

class DashboardController {

  constructor($state, Authentication, $rootScope) {
    var vm = this;

    vm.isLoggedIn = Authentication.isLoggedIn();
    vm.currentUser = Authentication.currentUser();

    vm.logout = function () {
      Authentication.logout();
      $state.go('home');
    }
  }
}
export {DashboardController};
