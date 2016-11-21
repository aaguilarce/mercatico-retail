import _ from 'lodash';


class UpdatePublisherAdminController {
    constructor(Publishers,$stateParams,Authentication,$state) {
        var vm = this;
        vm.title="Update Publisher" 
        vm.Publishers = Publishers;
        vm.publisher = $stateParams;//to get book id of the url

        this.Publishers.getOne(vm.publisher.publisherId,Authentication).then(function(data){
            vm.currentPublisher=data;
        });

        vm.onSubmit = function () {
            vm.Publishers.updatePublishers(vm.currentPublisher,Authentication)
            .then(function (data) {
                //console.log(data);
                $state.go('publishersadmin');
            });
        };
    }

}
export { UpdatePublisherAdminController };
