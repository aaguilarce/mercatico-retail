'use strict';

class ListProductController {

  constructor(Products, Authentication, $state) {
    var vm = this;

    vm.Products = Products;

    vm.allProducts = this.getProducts();

    vm.openBookCard = function (id) {
      $state.go('viewbookadmin', {bookId: id});
    }
    vm.updateBookCard= function(id){
      $state.go('updatebookadmin', {bookId: id});
    }
    vm.removeBookCard= function(id){
      vm.Books.deleteBooks(id,Authentication);
      vm.getBooks();
    }
  }

  getProducts() {
    this.Products.get().then(() => {
      this.allProducts = this.Products.getState();
    });
  }
}

ListProductController.$inject = ['Products', 'Authentication','$state'];

export {ListProductController};
