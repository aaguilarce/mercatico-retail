'use strict';

class CreateProductController {
  constructor(Categories, Products, Authentication, $state) {
    var vm = this;

    let today = new Date();

    vm.Categories = Categories;

    vm.imageRaw = '';

    vm.categories = this.getCategories();
    console.log(vm.categories);
		//vm.selectedItem = vm.categories[0].name;

		vm.dropboxItemSelected = (item) => {
			vm.selectedItem = item.name;
		};

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
          $('#dialogForm').on('hidden.bs.modal', function () {
            $state.go('dashboard.list-product');
          });
          $('#dialogForm').modal();
        });
      });
    };
  };

  getCategories() {
	  this.Categories.get().then(() => {
      this.categories = this.Categories.getState();
    });
  };
}

CreateProductController.$inject = ['Categories','Products', 'Authentication', '$state'];

export {CreateProductController};
