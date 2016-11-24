'use strict';

import './editCategory.scss';
import {EditCategoryController as controller} from './editCategory.controller';
import template from './editCategory.html';

export const editCategoryDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'editCategory',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
