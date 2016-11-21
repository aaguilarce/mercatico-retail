import _ from 'lodash';


class CreateAuthorController {
    constructor( Authors, Authentication) {
        var vm = this;
        vm.title = 'Create Author';

        vm.Authors = Authors;
        vm.author={
            name: ""
        }
        

        vm.onSubmit = function () {
            vm.Authors.insertAuthors(vm.author,Authentication).then(function(resp){
                    $("#myModal").modal();
                });
        };

    }


}

export { CreateAuthorController };
