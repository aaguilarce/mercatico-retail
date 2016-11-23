import _ from 'lodash';


class ViewBookController {
    constructor(Books,$stateParams) {
        var vm = this;
        vm.Books = Books;
        vm.book = $stateParams;//to get book id of the url
        this.Books.getOne(vm.book.bookId).then(function(data){
            vm.currentbook=data;
            //console.log(vm.currentbook);
        });

    }

}
export { ViewBookController };
