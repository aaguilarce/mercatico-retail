'use strict';

import './cardProduct.scss';
import template from './cardProduct.html';

export const cardProductDirective = () => {
  return {
    template,
    restrict: 'E',
    scope: {
      'product': '=',
      'detailproduct': '&',
      'addcart': '&'
    },
    replace: true
  };
};
