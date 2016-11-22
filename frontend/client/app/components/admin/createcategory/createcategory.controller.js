'use strict';

class CreateCategoryController {
  constructor(Categories, Authentication) {
    var vm = this;

    vm.category = { name: '', description: '' }

    vm.onSubmit = function () {
      Categories.insertCategory(vm.category, Authentication).then((resp) => {
        $("#dialogForm").modal();
      });
    };
  }
}

export {CreateCategoryController};
