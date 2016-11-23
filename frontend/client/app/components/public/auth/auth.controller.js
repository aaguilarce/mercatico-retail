'use strict';

class AuthController {
  constructor(Authentication, $state) {
    var vm = this;

    vm.error = '';
    vm.isError - false;

    vm.credentials = {
      name: '',
      email: '',
      password: ''
    };

    vm.login = function () {
      Authentication.login(vm.credentials)
        .error((err) => {
          vm.isError = true;
          vm.error = err.message;
        })
        .then(function () {
          Authentication.getProfile()
            .success((data) => {
              vm.user = data;
              vm.isError = false;

              if (vm.user.type === 'admin') {
                $state.go('dashboard');
              }
              else if (vm.user.type === 'client') {
                $state.go('books');
              }
            })
            .error((e) => {
              console.log(e);
            });
        });
    };

    vm.register = function () {
      vm.credentials.type = 'client';

      Authentication
        .register(vm.credentials)
        .error((err) => {
          vm.isError = true;
          vm.error = err.message;
        })
        .then(() => {
          Authentication.getProfile()
            .success((data) => {
              vm.user = data;

              if (vm.user.type === 'admin') {
                $state.go('dashboard');
              }
              else if (vm.user.type === 'client') {
                $state.go('home');
              }
            })
            .error(function (e) {
              console.log(e);
            });
        });
    };
  }
}

export {AuthController};
