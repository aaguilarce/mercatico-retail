import _ from 'lodash';


class AuthorsAdminController {
    constructor($state, Authors,Authentication) {
        var vm = this;
        vm.title = 'Authors';

        vm.AuthorsArray = [ ];
        vm.Authors = Authors;
        vm.getAuthors();

        vm.updateAuthor=function(id){
             $state.go('updateauthoradmin', {authorId: id});
        }

        vm.removeAuthor=function(id){
            vm.Authors.deleteAuthors(id,Authentication);
            vm.getAuthors();
        }
    
    }

    getAuthors() {
	  this.Authors.get()
		.then(() => {
			this.AuthorsArray = this.Authors.getState(); 
            //console.log(this.AuthorsArray);
		});
  }

}
export { AuthorsAdminController };
