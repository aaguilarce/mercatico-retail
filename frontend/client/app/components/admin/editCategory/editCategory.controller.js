'use strict';

class EditCategoryController {
  constructor(Categories, Authentication, $state, $stateParams) {
    var vm = this;

    vm.Categories = Categories;
    vm.category = {};

    this.Categories.getOne($stateParams.categoryId, Authentication).then((data) => {
      vm.category = data;
    });

    vm.onSubmit = function () {
      Categories.updateCategory(vm.category, Authentication).then((resp) => {
        $('#dialogForm').on('hidden.bs.modal', function () {
          vm.category = {};
          $state.go('dashboard.list-category');
        });
        $('#dialogForm').modal();
      });
    };
  }
}

EditCategoryController.$inject = ['Categories', 'Authentication', '$state', '$stateParams'];

export {EditCategoryController};
