import _ from 'lodash';


class ViewBookAdminController {
    constructor(Books,$stateParams,$state) {
        var vm = this;
        vm.Books = Books;
        vm.book = $stateParams;//to get book id of the url
        this.Books.getOne(vm.book.bookId).then(function(data){
            vm.currentbook=data;
            //console.log(vm.currentbook);
        });

        vm.updatecard= function(id){
            $state.go('updatebookadmin', {bookId: id});
        }
    }

}
export { ViewBookAdminController };
