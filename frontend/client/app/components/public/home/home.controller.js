'use strict';

class HomeController {
	constructor(Categories, Authentication, $state) {
		var vm = this;

    vm.Categories = Categories;

    vm.banners = [
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/onata_224522131_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/zanaproducts_248195335_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/periwinklenuthatch_254377282_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/saressadesigns_249056175_4040x670.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/barruntando_191364488_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/anhaicabagworks_234743869_2020x335.jpg'
    ];

		vm.imgURL = vm.banners[(Math.floor(Math.random() * 6) + 1) - 1];

		vm.categories = this.getCategories();
		vm.selectedItem = 'All';

		vm.dropboxItemSelected = (item) => {
			vm.selectedItem = item.name;
		}
	};

  getCategories() {
	  this.Categories.get().then(() => {
      this.categories = this.Categories.getState();
    });
  };
}

HomeController.$inject = ['Categories', 'Authentication','$state'];

export {HomeController};
