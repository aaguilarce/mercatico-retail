'use strict';

import './createCategory.scss';
import {CreateCategoryController as controller} from './createCategory.controller';
import template from './createCategory.html';

export const createCategoryDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'createCategory',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
