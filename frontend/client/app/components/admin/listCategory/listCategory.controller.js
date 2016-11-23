'use strict';

class ListCategoryController {
  constructor(Categories, Authentication, $state) {
    var vm = this;

    vm.Categories = Categories;

    vm.allCategories = [];

    vm.allCategories = this.getCategories();

    vm.updateCategory = (id) => {
      $state.go('updateCategory', {categoryId: id});
    }

    vm.removeCategory = (id) => {
      vm.Categories.deleteCategory(id, Authentication);
    }
  }

  getCategories() {
    this.Categories.get().then(() => {
      this.allCategories = this.Categories.getState();
    });
  }
}

ListCategoryController.$inject = ['Categories', 'Authentication', '$state'];

export {ListCategoryController};
