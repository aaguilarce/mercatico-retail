'use strict';

class ListProductController {

  constructor(Products, Categories, Sellers, Authentication, $state) {
    var vm = this;

    vm.Products = Products;
    vm.Categories = Categories;
    vm.Sellers = Sellers;
    vm.Authentication = Authentication;

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

    vm.showproducts = (id) => {
      $state.go('dashboard.list-product-seller', { sellerId: id });
    }
  }

  getProducts() {
    this.Products.get().then(() => {
      this.allProducts = this.Products.getState();
    });
  }
}

ListProductController.$inject = ['Products', 'Categories', 'Sellers', 'Authentication','$state'];

export {ListProductController};
