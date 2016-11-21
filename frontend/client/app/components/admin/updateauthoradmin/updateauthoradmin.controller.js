import _ from 'lodash';


class UpdateAuthorAdminController {
    constructor(Authors,$stateParams,Authentication,$state) {
        var vm = this;
        vm.title="Update Author's name" 
        vm.Authors = Authors;
        vm.author = $stateParams;//to get book id of the url

        this.Authors.getOne(vm.author.authorId,Authentication).then(function(data){
            vm.currentAuthor=data;
        });

        vm.onSubmit = function () {
            vm.Authors.updateAuthors(vm.currentAuthor,Authentication)
            .then(function (data) {
                //console.log(data);
                $state.go('authorsadmin');
            });
        };
    }

}
export { UpdateAuthorAdminController };
