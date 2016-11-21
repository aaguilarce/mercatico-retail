import _ from 'lodash';


class UpdateCategoryAdminController {
    constructor(Categories,$stateParams,Authentication,$state) {
        var vm = this;
        vm.title="Update Category" 
        vm.Categories = Categories;
        vm.category = $stateParams;//to get book id of the url

        this.Categories.getOne(vm.category.categoryId,Authentication).then(function(data){
            vm.currentCategory=data;
        });


        vm.onSubmit = function () {
            vm.Categories.updateCategories(vm.currentCategory,Authentication)
            .then(function (data) {
                //console.log(data);
                $state.go('categoriesadmin');
            });
        };
    }

}
export { UpdateCategoryAdminController };
