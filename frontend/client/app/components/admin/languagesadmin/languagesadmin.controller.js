import _ from 'lodash';


class LanguagesAdminController {
    constructor($state, Languages,Authentication) {
        var vm = this;
        vm.title = 'Languages';

        vm.LanguagesArray = [ ];
        vm.Languages = Languages;
        vm.getLanguages();

        vm.updateLanguage=function(id){
            $state.go('updatelanguageadmin', {languageId: id});
        }

        vm.removeLanguage=function(id){
            vm.Languages.deleteLanguages(id,Authentication);
            vm.getLanguages();
        }

    }

    getLanguages() {
	  this.Languages.get()
		.then(() => {
			this.LanguagesArray = this.Languages.getState(); 
            //console.log(this.LanguagesArray);
		});
  }

}
export { LanguagesAdminController };
