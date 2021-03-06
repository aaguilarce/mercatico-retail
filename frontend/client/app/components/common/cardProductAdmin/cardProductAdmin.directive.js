'use strict';

import './cardProductAdmin.scss';
import template from './cardProductAdmin.html';

export const cardProductAdminDirective = () => {
  return {
    template,
    restrict: 'E',
    scope: {
      'product': '=',
      'detailproduct': '&',
      'editproduct': '&',
      'removeproduct': '&',
      'showproducts': '&'
    },
    replace: true
  };
};
