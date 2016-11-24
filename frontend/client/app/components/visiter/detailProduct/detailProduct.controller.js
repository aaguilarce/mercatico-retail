'use strict';

class DetailProductController {
  constructor(Products, $state, $stateParams, $scopte) {
    var vm = this;

    vm.product = {};

    let id = $stateParams.productId;

    this.Products.getOne(id).then((data) => {
      vm.product = data;
    });

    vm.addcart() {

    }
  }
}

DetailProductController.$inject = ['Products','$state', '$stateParams', '$scopte'];

export {DetailProductController};
