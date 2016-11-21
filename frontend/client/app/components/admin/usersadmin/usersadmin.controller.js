import _ from 'lodash';


class UsersAdminController {
    constructor($state, Authentication) {
        var vm = this;
        vm.title = 'Authors';

        vm.UserArray = [ ];
        vm.Authentication = Authentication;
        vm.getUsers();

    }

    getUsers() {
	  this.Authentication.getUsers(this.Authentication)
		.then(() => {
			this.UserArray = this.Authentication.getState();  
            //console.log(this.AuthorsArray);
		});
  }

}
export { UsersAdminController };
