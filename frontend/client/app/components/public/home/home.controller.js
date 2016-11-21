import _ from 'lodash';


class HomeController {
	constructor() {
		var vm = this;

		vm.subjects = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];

		vm.selectedItem = 'All';

		vm.dropboxitemselected = function (item) {
			vm.selectedItem = item;
		}
	};
}

export { HomeController };
