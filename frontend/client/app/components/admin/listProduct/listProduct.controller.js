'use strict';

class ListProductController {

  constructor(Products, Authentication, $state) {
    var vm = this;

    vm.Products = Products;

    vm.allProducts = this.getProducts();
    vm.detailsProduct = {};

    vm.detailproduct = (id) => {
      this.Products.getOne(id, Authentication).then((resp) => {
        vm.detailsProduct = resp;
        $('#productDetail').modal();
      });
    }

    vm.editproduct = (id) => {
      $state.go('dashboard.edit-product', { productId: id });
    }

    vm.removeproduct = (id) => {
      vm.Products.deleteProduct(id, Authentication);
      vm.getProducts();
    }
  }

  getProducts() {
    this.Products.get().then(() => {
      this.allProducts = this.Products.getState();
    });
  }
}

ListProductController.$inject = ['Products', 'Authentication','$state'];

export {ListProductController};
