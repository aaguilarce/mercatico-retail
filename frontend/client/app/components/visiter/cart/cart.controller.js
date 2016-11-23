import _ from 'lodash';


class CartController {
	constructor() {
		var vm = this;
        vm.title="Cart";
		vm.productsArray=[{
			title:"title",
			price:30,
			quantity:1,
			total: 30
		}];

	};



}

export { CartController };
