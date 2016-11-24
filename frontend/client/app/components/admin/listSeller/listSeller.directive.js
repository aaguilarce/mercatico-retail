'use strict';

import './listSeller.scss';
import {ListSellerController as controller} from './listSeller.controller';
import template from './listSeller.html';

export const listSellerDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'listSeller',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
