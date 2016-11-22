'use strict';

import './createProduct.scss';
import {CreateProductController as controller} from './createProduct.controller';
import template from './createProduct.html';

export const createProductDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'createProduct',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
