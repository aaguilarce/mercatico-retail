import _ from 'lodash';


class ProfileAdminController {
  constructor(Authentication) {
	var vm=this;  

  Authentication.getProfile()
    .success(function(data) {
          vm.user = data;
      })
      .error(function (e) {
          console.log(e);
    });


  }

}

export {ProfileAdminController};
