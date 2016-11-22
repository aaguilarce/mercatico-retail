'use strict';

import './listProduct.scss';
import {ListProductController as controller} from './listProduct.controller';
import template from './listProduct.html';

export const listProductDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'listProduct',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
