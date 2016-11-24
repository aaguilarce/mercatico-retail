'use strict';

class EditSellerController {
  constructor(Sellers, Authentication, $state, $stateParams) {
    var vm = this;

    vm.Sellers = Sellers;
    vm.seller = {};

    this.Sellers.getOne($stateParams.sellerId, Authentication).then((data) => {
      vm.seller = data;
    });

    vm.onSubmit = function () {
      this.Sellers.updateSeller(vm.seller, Authentication).then((resp) => {
        vm.seller = {};
        $('#dialogForm').on('hidden.bs.modal', function () {
          $state.go('dashboard.list-seller');
        });
        $('#dialogForm').modal();
      });
    };
  }
}

EditSellerController.$inject = ['Sellers', 'Authentication', '$state', '$stateParams'];

export {EditSellerController};
