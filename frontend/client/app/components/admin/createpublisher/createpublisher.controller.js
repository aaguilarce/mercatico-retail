import _ from 'lodash';


class CreatePublisherController {
    constructor( Publishers, Authentication) {
        var vm = this;
        vm.title = 'Create Publisher';

        vm.Publishers = Publishers;
        vm.publisher={
            name: "",
            location:"",
            year_founded:""
        }
        

        vm.onSubmit = function () {
            vm.Publishers.insertPublishers(vm.publisher,Authentication).then(function(resp){
                    $("#myModal").modal();
                });
        };

    }


}

export { CreatePublisherController };
