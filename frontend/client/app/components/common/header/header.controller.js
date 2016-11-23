'use strict';

class HeaderController {
  constructor(Categories, Authentication, $state) {
    var vm = this;

    vm.Categories = Categories;

    vm.isLoggedIn = Authentication.isLoggedIn();
    vm.currentUser = Authentication.currentUser();

    vm.categories = this.getCategories();

    vm.logout = function () {
      Authentication.logout();
      $state.go($state.current, {}, {reload: true});
    }
  }

  getCategories() {
	  this.Categories.get().then(() => {
      this.categories = this.Categories.getState();
    });
  };
}

HeaderController.$inject = ['Categories', 'Authentication','$state'];

export {HeaderController};
