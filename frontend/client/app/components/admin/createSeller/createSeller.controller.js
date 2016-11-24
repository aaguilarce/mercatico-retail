'use strict';

class CreateSellerController {
  constructor(Sellers, Authentication, $state) {
    var vm = this;

    vm.Sellers = Sellers;
    vm.seller = { name: '', email: '', address: '' }

    vm.onSubmit = function () {
      this.Sellers.insertSeller(vm.seller, Authentication).then((resp) => {
        $('#dialogForm').on('hidden.bs.modal', function () {
          $state.go('dashboard.list-seller');
        });
        $('#dialogForm').modal();
      });
    };
  }
}

CreateSellerController.$inject = ['Sellers', 'Authentication', '$state'];

export {CreateSellerController};
