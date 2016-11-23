'use strict';

import './editProduct.scss';
import {EditProductController as controller} from './editProduct.controller';
import template from './editProduct.html';

export const editProductDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'editProduct',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
