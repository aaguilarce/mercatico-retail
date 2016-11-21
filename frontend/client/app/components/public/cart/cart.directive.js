import './cart.scss';
import {CartController as controller} from './cart.controller';
import template from './cart.html';

export const cartDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'cart',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
