import _ from 'lodash';


class PublishersAdminController {
    constructor($state, Publishers,Authentication) {
        var vm = this;
        vm.title = 'Publishers';

        vm.PublishersArray = [ ];
        vm.Publishers = Publishers;
        vm.getPublishers();

        vm.updatePublisher=function(id){
            $state.go('updatepublisheradmin', {publisherId: id});
        }

        vm.removePublisher=function(id){
            vm.Publishers.deletePublishers(id,Authentication);
            vm.getPublishers();
        }

    }

    getPublishers() {
	  this.Publishers.get()
		.then(() => {
			this.PublishersArray = this.Publishers.getState(); 
            //console.log(this.PublishersArray);
		});
  }

}
export { PublishersAdminController };
