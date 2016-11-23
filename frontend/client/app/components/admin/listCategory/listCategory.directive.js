'use strict';

import './listCategory.scss';
import {ListCategoryController as controller} from './listCategory.controller';
import template from './listCategory.html';

export const listCategoryDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'listCategory',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
