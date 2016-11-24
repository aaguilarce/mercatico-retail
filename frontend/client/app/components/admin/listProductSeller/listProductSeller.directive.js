'use strict';

import './listProductSeller.scss';
import {ListProductSellerController as controller} from './listProductSeller.controller';
import template from './listProductSeller.html';

export const listProductSellerDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'listProductSeller',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
