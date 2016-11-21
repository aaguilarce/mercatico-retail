import _ from 'lodash';


class CreateCategoryController {
    constructor( Categories, Authentication) {
        var vm = this;
        vm.title = 'Create Category';

        vm.Categories = Categories;
        vm.category={
            name: ""
        }
        

        vm.onSubmit = function () {
            vm.Categories.insertCategories(vm.category,Authentication).then(function(resp){
                    $("#myModal").modal();
                });
        };

    }


}

export { CreateCategoryController };
