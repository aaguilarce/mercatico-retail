'use strict';

class EditProductController {
  constructor(Categories, Products, Authentication, $state, $stateParams) {
    var vm = this;

    let today = new Date();

    vm.Categories = Categories;
    vm.Products = Products;

    vm.imageRaw = '';

    vm.categories = this.getCategories();
    //console.log(vm.categories);
		//vm.selectedItem = vm.categories[0].name;

		vm.dropboxItemSelected = (item) => {
			vm.selectedItem = item.name;
		};

    vm.product = {};

    this.Products.getOne($stateParams.productId).then((data) => {
      vm.product = data;
      console.log("product to edit", vm.product);
    });

    vm.onSubmit = function () {
      if (angular.equals(vm.imageRaw, {})) { // use the same image
        console.log("entro en el equals");
        vm.Products.updateProduct(vm.product, Authentication).then((resp) => {
          $('#dialogForm').on('hidden.bs.modal', function () {
            $state.go('dashboard.list-product');
          });
          $('#dialogForm').modal();
        });
      }
      else { //save new image
        this.Products.imgToBase64(vm.imageRaw).then((resp) => {
          console.log("entro en el else");
          vm.product.image64 = resp;
          vm.Products.updateProduct(vm.product, Authentication).then((resp) => {
            $('#dialogForm').on('hidden.bs.modal', function () {
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
      this.categories = this.Categories.getState();
    });
  }
}

EditProductController.$inject = ['Categories','Products', 'Authentication', '$state', '$stateParams'];

export {EditProductController};
