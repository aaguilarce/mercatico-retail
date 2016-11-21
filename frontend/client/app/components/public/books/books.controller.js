import _ from 'lodash';


class BooksController {
    constructor($state, Books) {
        var vm = this;
        vm.button = "Button dropdown";
        vm.actions = [
            "Action", "Another Action", "Something else here"
        ];
        
        vm.change = function(name){
            vm.button = name;
        }

    }

    getBooks() {
	  this.Books.get()
		.then(() => {
			this.booksArray = this.Books.getState();
            this.amount=this.booksArray.length;
            console.log(this.booksArray);
		});
  }

}
export { BooksController };
