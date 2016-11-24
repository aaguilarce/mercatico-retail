'use strict';

import _ from 'lodash';

class CreateProductController {
  constructor(Categories, Sellers, Products, Authentication, $state) {
    var vm = this;
    let today = new Date();

    vm.product = {
      name: '',
      description: '',
      price: '',
      published_date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      image64: '',
      quantity: '',
      category: {},
      seller: {}
    };

    vm.allCategories = [];
    vm.allSellers = [];

    vm.Categories = Categories;
    vm.Products = Products;
    vm.Sellers = Sellers;

    vm.imageRaw = '';
    vm.categorySelected = {};
    vm.sellerSelected = {};

    this.Categories.get().then(() => {
      vm.allCategories = this.Categories.getState();

      vm.selectedItemCategory = vm.allCategories[0].name;
      vm.dropboxCategorySelected = (item) => {
        vm.selectedItemCategory = item.name;
        vm.product.category = item;
      };
    });

    this.Sellers.get().then(() => {
      vm.allSellers = this.Sellers.getState();

      vm.selectedItemSeller = vm.allSellers[0].name;
      vm.dropboxSellerSelected = (item) => {
        vm.selectedItemSeller = item.name;
        vm.product.seller = item;
      };
    });

    vm.onSubmit = () => {
      this.Products.imgToBase64(vm.imageRaw).then((resp) => {
        vm.product.image64 = resp;
        this.Products.insertProduct(vm.product, Authentication).then((resp) => {
          $('#dialogForm').on('hidden.bs.modal', () => {
            $state.go('dashboard.list-product');
          });
          $('#dialogForm').modal();
        });
      });
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

CreateProductController.$inject = ['Categories', 'Sellers','Products', 'Authentication', '$state'];

export {CreateProductController};
