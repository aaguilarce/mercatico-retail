import _ from 'lodash';


class BooksAdminController {
    constructor($state, Books,Authentication) {
        var vm = this;
        vm.title = 'Books';
        vm.filter="";

        vm.booksArray = [ ];
        vm.Books = Books;
        vm.getBooks();

        vm.openBookCard = function (id) {
            $state.go('viewbookadmin', {bookId: id});
        }
        vm.updateBookCard= function(id){
            $state.go('updatebookadmin', {bookId: id});
        }
        vm.removeBookCard= function(id){
            console.log("r"+id);
            vm.Books.deleteBooks(id,Authentication);
            vm.getBooks();
        }

    }

    getBooks() {
	  this.Books.get()
		.then(() => {
			this.booksArray = this.Books.getState();
            console.log(this.booksArray);
		});
  }

}
export { BooksAdminController };
