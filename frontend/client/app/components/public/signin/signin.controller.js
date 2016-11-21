import _ from 'lodash';


class SigninController {
    constructor(Authentication, $state, $scope) {
        var vm = this;
        vm.title = 'Sign In';

        vm.credentials = {
            name: "",
            email: "",
            password: ""
        };

        vm.login = function () {
            delete vm.credentials['name'];
            Authentication
                .login(vm.credentials)
                .error(function (err) {
                    alert(err);
                })
                .then(function () {
                    //verify type of user
                    Authentication.getProfile()
                        .success(function (data) {
                            vm.user = data;
                            //console.log(data);
                            if (vm.user.type === 'admin') {
                                $state.go('dashboard');
                            }
                            else if (vm.user.type === 'client') {
                                $state.go('books');
                            }
                        })
                        .error(function (e) {
                            console.log(e);
                        });


                });
        };

        vm.register = function () {
            vm.credentials.type = 'client'; //the user created are clients
            Authentication
                .register(vm.credentials)
                .error(function (err) {
                    alert(err);
                })
                .then(function () {
                    Authentication.getProfile()
                        .success(function (data) {
                            vm.user = data;
                            //console.log(data);
                            if (vm.user.type === 'admin') {
                                $state.go('profileadmin');
                            }
                            else if (vm.user.type === 'client') {
                                $state.go('books');
                            }
                        })
                        .error(function (e) {
                            console.log(e);
                        });
                });
        };

    }

}

export { SigninController };
