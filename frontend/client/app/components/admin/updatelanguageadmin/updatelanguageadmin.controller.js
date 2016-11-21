import _ from 'lodash';


class UpdateLanguageAdminController {
    constructor(Languages,$stateParams,Authentication,$state) {
        var vm = this;
        vm.title="Update language" 
        vm.Languages = Languages;
        vm.language = $stateParams;//to get book id of the url
        this.Languages.getOne(vm.language.languageId,Authentication).then(function(data){
            vm.currentLanguage=data;
        });

        vm.onSubmit = function () {
            vm.Languages.updateLanguages(vm.currentLanguage,Authentication)
            .then(function (data) {
                //console.log(data);
                $state.go('languagesadmin');
            });
        };
    }

}
export { UpdateLanguageAdminController };
