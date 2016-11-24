'use strict';

import './editSeller.scss';
import {EditSellerController as controller} from './editSeller.controller';
import template from './editSeller.html';

export const editSellerDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'editSeller',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
