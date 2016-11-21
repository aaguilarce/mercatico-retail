import _ from 'lodash';


class HeaderAdminController {
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
export { HeaderAdminController };
