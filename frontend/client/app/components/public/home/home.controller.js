import _ from 'lodash';


class HomeController {
	constructor() {
		var vm = this;

    vm.banners = [
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/onata_224522131_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/zanaproducts_248195335_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/periwinklenuthatch_254377282_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/saressadesigns_249056175_4040x670.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/barruntando_191364488_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/anhaicabagworks_234743869_2020x335.jpg'
    ];

		vm.imgURL = vm.banners[(Math.floor(Math.random() * 6) + 1) - 1];

		vm.subjects = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];
		vm.selectedItem = 'All';

		vm.dropboxitemselected = function (item) {
			vm.selectedItem = item;
		}
	};
}

export {HomeController};
