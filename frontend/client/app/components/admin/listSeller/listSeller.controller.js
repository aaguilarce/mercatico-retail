'use strict';

class ListSellerController {
  constructor(Sellers, Authentication, $state) {
    var vm = this;

    vm.Sellers = Sellers;

    vm.allSellers = [];

    vm.allSellers = this.getSellers();

    vm.editseller = (id) => {
      $state.go('dashboard.edit-seller', { sellerId: id });
    }

    vm.removeseller = (id) => {
      vm.Sellers.deleteSeller(id, Authentication);
    }
  }

  getSellers() {
    this.Sellers.get().then(() => {
      this.allSellers = this.Sellers.getState();
    });
  }
}

ListSellerController.$inject = ['Sellers', 'Authentication', '$state'];

export {ListSellerController};
