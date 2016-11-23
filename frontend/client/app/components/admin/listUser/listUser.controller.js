'use strict';

class ListUserController {
  constructor(Authentication, $state) {
    var vm = this;

    vm.Authentication = Authentication;

    vm.allUsers = [];
    vm.getUsers();
  }

  getUsers() {
    this.Authentication.getUsers(this.Authentication).then(() => {
      this.allUsers = this.Authentication.getState();
    });
  };
}

ListUserController.$inject = ['Authentication', '$state'];

export {ListUserController};
