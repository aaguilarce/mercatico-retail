'use strict';

class SearchResultController {

  constructor(Products, Authentication, $state, $stateParams) {
    var vm = this;

    vm.Products = Products;
    vm.Authentication = Authentication;

    vm.allProducts = [];
    vm.detailsProduct = {};

    if ($stateParams.category.name === 'All') {
      this.getProductsFilter($stateParams.filter);
    }
    else {
      this.getProductsCategoryFilter($stateParams.category, $stateParams.filter);
    }

    vm.detailproduct = (id) => {
      $state.go('detail-product', {productId: id });
    }

    vm.addcart = (id) => {
      //$state.go('dashboard.list-product-seller', { sellerId: id });
    }
  }

  getProductsFilter(filter) {
    this.Products.get().then(() => {
      let temp = this.Products.getState();
      let i;

      for (i = 0; i < temp.length; i++) {
        if (temp[i].name.includes(filter) || temp[i].description.includes(filter)) {
          this.allProducts.push(temp[i]);
        }
      }
    });
  }

  getProductsCategoryFilter(category, filter) {
    this.Products.get().then(() => {
      let temp = this.Products.getState();
      let i;

      for (i = 0; i < temp.length; i++) {
        console.log('id from search', category._id);
        console.log('id from category', temp[i].category._id);
        if ((temp[i].name.includes(filter) || temp[i].description.includes(filter)) && temp[i].category._id == category._id) {
          console.log('emtro');
          this.allProducts.push(temp[i]);
        }
      }
    });
  }
}

SearchResultController.$inject = ['Products', 'Authentication', '$state', '$stateParams'];

export {SearchResultController};
