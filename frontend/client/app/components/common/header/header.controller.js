import _ from 'lodash';


class HeaderController {
  constructor($state, Authentication, $rootScope) {
    var vm = this;

    vm.isLoggedIn = Authentication.isLoggedIn();
    vm.currentUser = Authentication.currentUser();

    console.log(vm.currentUser);

    vm.logout = function () {
      Authentication.logout();
      $state.go('home');
    }
  }
}
export { HeaderController };
