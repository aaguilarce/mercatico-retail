import _ from 'lodash';


class CreateLanguageController {
    constructor( Languages, Authentication) {
        var vm = this;
        vm.title = 'Create language';

        vm.Languages = Languages;
        vm.language={
            name: ""
        }
        

        vm.onSubmit = function () {
            vm.Languages.insertLanguages(vm.language,Authentication).then(function(resp){
                    $("#myModal").modal();
                });
        };

    }


}

export { CreateLanguageController };
