import _ from 'lodash';


class CategoriesAdminController {
    constructor($state, Categories,Authentication) {
        var vm = this;
        vm.title = 'Categories';

        vm.CategoriesArray = [ ];
        vm.Categories = Categories;
        vm.getCategories();

        vm.updateCategory=function(id){
             $state.go('updatecategoryadmin', {categoryId: id});
        }

        vm.removeCategory=function(id){
            vm.Categories.deleteCategories(id,Authentication);
            vm.getCategories();
        }
    
    }

    getCategories() {
	  this.Categories.get()
		.then(() => {
			this.CategoriesArray = this.Categories.getState(); 
            //console.log(this.CategoriesArray);
		});
  }

}
export { CategoriesAdminController };
