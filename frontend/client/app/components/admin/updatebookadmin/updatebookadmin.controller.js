import _ from 'lodash';


class UpdateBookAdminController {
    constructor(Books, Categories, Languages, Publishers, Authors, $state, Authentication, $stateParams) {
        var vm = this;
        vm.title = 'Update Book';

        vm.Categories = Categories;
        vm.getCategories();
        vm.categoriesArray;

        vm.Languages = Languages;
        vm.getLanguages();
        vm.languagesArray;

        vm.Publishers = Publishers;
        vm.getPublishers();
        vm.publishersArray;

        vm.Authors = Authors;
        vm.getAuthors();
        vm.authorsArray;

        vm.Books = Books;
        /*vm.book = {
            title: "",
            authors: "",
            published_date: "",
            price: "",
            categories: "",
            languages: "",
            publisher: "",
            state: "",
            best_seller: "",
            image_base64: "",
            quantity:""
        };*/
        vm.image = {};

        vm.bookParams = $stateParams;//to get book id of the url
        this.Books.getOne(vm.bookParams.bookId, Authentication).then(function (data) {
            vm.book = data;
            console.log(vm.book);
            vm.book.published_date = new Date(vm.book.published_date);
        });


        vm.onSubmit = function () {
            if (angular.equals(vm.image, {})) {// use the same image
                vm.Books.updateBooks(vm.book, Authentication).then(function (resp) {
                    $state.go('booksadmin');
                });

            }
            else {//save imaga
                console.log(vm.image);
                this.Books.BookImage64(vm.image).then(function (resp) {
                    vm.book.image_base64 = resp;
                    vm.Books.updateBooks(vm.book, Authentication).then(function (resp) {
                        $state.go('booksadmin');
                    });
                });
            }

        };

    }

    getCategories() {
        this.Categories.get()
            .then(() => {
                this.categoriesArray = this.Categories.getState();
            });
    }

    getLanguages() {
        this.Languages.get()
            .then(() => {
                this.languagesArray = this.Languages.getState();
            });
    }

    getPublishers() {
        this.Publishers.get()
            .then(() => {
                this.publishersArray = this.Publishers.getState();
            });
    }

    getAuthors() {
        this.Authors.get()
            .then(() => {
                this.authorsArray = this.Authors.getState();
            });
    }

}

export { UpdateBookAdminController };
