'use strict';

class CreateProductController {

  constructor(Products, Authentication, $state) {
    var vm = this;

    let today = new Date();

    vm.imageRaw = '';

    vm.product = {
      name: '',
      description: '',
      price: '',
      published_date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      seller: '',
      image64: '',
      quantity: ''
    };

    vm.onSubmit = function () {
      Products.imgToBase64(vm.imageRaw).then((resp) => {
        vm.product.image64 = resp;

        Products.insertProduct(vm.product, Authentication).then((resp) => {
          $("#dialogForm").modal();
        });
      });
    };
  }
}

CreateProductController.$inject = ['Products', 'Authentication','$state'];

export {CreateProductController};
