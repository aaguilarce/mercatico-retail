'use strict';

class ListProductSellerController {

  constructor(Products, Categories, Sellers, Authentication, $state, $stateParams) {
    var vm = this;

    vm.Products = Products;
    vm.Categories = Categories;
    vm.Sellers = Sellers;
    vm.Authentication = Authentication;

    vm.allProducts = [];
    this.getProducts();
    vm.detailsProduct = {};

    vm.seller = {};

    this.Sellers.getOne($stateParams.sellerId, Authentication).then((resp) => {
      vm.seller = resp;
    });

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
      let temp = this.Products.getState();
      let i;

      for (i = 0; i < temp.length; i++) {
        if (temp[i].seller._id === this.seller._id) {
          this.allProducts.push(temp[i]);
        }
      }
    });
  }
}

ListProductSellerController.$inject = ['Products', 'Categories', 'Sellers', 'Authentication', '$state', '$stateParams'];

export {ListProductSellerController};
