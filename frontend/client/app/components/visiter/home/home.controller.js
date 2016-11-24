'use strict';

class HomeController {
	constructor(Categories, Authentication, $state) {
		var vm = this;

    vm.Categories = Categories;

    vm.filter = '';

    vm.banners = [
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/zanaproducts_248195335_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/periwinklenuthatch_254377282_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/barruntando_191364488_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/anhaicabagworks_234743869_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/xanderloukids_232206214_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/1220ceramicsstudio_256801765_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/lexluxe_270536057_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/lunaticart_157486339_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/aiyshop_229722005_2020x335.jpg',
      'https://img1.etsystatic.com/site-assets/vesta-homepage-headers-v3/dindintoys_188277364_2020x335.jpg'
    ];

		vm.imgURL = vm.banners[(Math.floor(Math.random() * 9) + 1) - 1];

		vm.categories = [];
    this.getCategories();

		vm.selectedItem = {name: 'All', description: 'All'};

		vm.dropboxItemSelected = (item) => {
			vm.selectedItem = item;
		}

    vm.search = () => {
      $state.go('search-result', { category: vm.selectedItem, filter: vm.filter });
    };
	}

  getCategories() {
	  this.Categories.get().then(() => {
      this.categories = this.Categories.getState();
      this.categories.push({name: 'All', description: 'All'});
    });
  }
}

HomeController.$inject = ['Categories', 'Authentication','$state'];

export {HomeController};
