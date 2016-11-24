'use strict';

class EditProductController {
  constructor(Categories, Sellers, Products, Authentication, $state, $stateParams) {
    var vm = this;
    let today = new Date();

    vm.product = {};

    vm.Categories = Categories;
    vm.Products = Products;
    vm.Sellers = Sellers;

    vm.allCategories = [];
    vm.allSellers = []

    vm.imageRaw = {};
    vm.categorySelected = {};
    vm.sellerSelected = {};

    vm.selectedItemCategory = '';
    vm.selectedItemSeller = '';

    this.Categories.get().then(() => {
      vm.allCategories = this.Categories.getState();

      vm.dropboxCategorySelected = (item) => {
        vm.selectedItemCategory = item.name;
        vm.product.category = item;
      };
    });

    this.Sellers.get().then(() => {
      vm.allSellers = this.Sellers.getState();

      vm.dropboxSellerSelected = (item) => {
        vm.selectedItemSeller = item.name;
        vm.product.seller = item;
      };
    });

    this.Products.getOne($stateParams.productId).then((data) => {
      vm.product = data;
      vm.categorySelected = vm.product.category;
      vm.sellerSelected = vm.product.seller;

      vm.selectedItemCategory = vm.categorySelected.name;
      vm.selectedItemSeller = vm.sellerSelected.name;
    });

    vm.onSubmit = () => {
      if (angular.equals(vm.imageRaw, {})) { // use the same image
        vm.Products.updateProduct(vm.product, Authentication).then((resp) => {
          vm.product = {};
          $('#dialogForm').on('hidden.bs.modal', () => {
            $state.go('dashboard.list-product');
          });
          $('#dialogForm').modal();
        });
      }
      else { //save new image
        this.Products.imgToBase64(vm.imageRaw).then((resp) => {
          vm.product.image64 = resp;
          vm.Products.updateProduct(vm.product, Authentication).then((resp) => {
            $('#dialogForm').on('hidden.bs.modal', () => {
              $state.go('dashboard.list-product');
            });
            $('#dialogForm').modal();
          });
        });
      }
    };
  }

  getCategories() {
	  this.Categories.get().then(() => {
      this.allCategories = this.Categories.getState();
    });
  }

  getSellers() {
	  this.Sellers.get().then(() => {
      this.allSellers = this.Sellers.getState();
    });
  }
}

EditProductController.$inject = ['Categories', 'Sellers', 'Products', 'Authentication', '$state', '$stateParams'];

export {EditProductController};
