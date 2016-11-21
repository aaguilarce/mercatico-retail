import _ from 'lodash';


class CreateBookController {
    constructor(Books, Categories, Languages,Publishers,Authors, $state, Authentication) {
        var vm = this;
        vm.title = 'Create Book';

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

        vm.Books=Books;
        vm.book = {
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
        };
        vm.image = {};

        vm.onSubmit = function () {
            this.Books.BookImage64(vm.image).then(function(resp){
                vm.book.image_base64=resp;
                vm.Books.insertBooks(vm.book,Authentication).then(function(resp){
                    $("#myModal").modal();
                });
            });
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

export { CreateBookController };
