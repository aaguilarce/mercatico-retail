'use strict';

import './createSeller.scss';
import {CreateSellerController as controller} from './createSeller.controller';
import template from './createSeller.html';

export const createSellerDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'createSeller',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
