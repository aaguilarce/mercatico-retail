'use strict';

class CreateCategoryController {
  constructor(Categories, Authentication, $state) {
    var vm = this;

    vm.category = { name: '', description: '' }

    vm.onSubmit = function () {
      Categories.insertCategory(vm.category, Authentication).then((resp) => {
        $('#dialogForm').on('hidden.bs.modal', function () {
          $state.go('dashboard.list-category');
        });
        $('#dialogForm').modal();
      });
    };
  }
}

CreateCategoryController.$inject = ['Categories', 'Authentication', '$state'];

export {CreateCategoryController};
