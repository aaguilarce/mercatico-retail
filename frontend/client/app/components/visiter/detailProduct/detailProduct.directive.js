'use strict';

import './detailProduct.scss';
import {DetailProductController as controller} from './detailProduct.controller';
import template from './detailProduct.html';

export const detailProductDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'detailProduct',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
