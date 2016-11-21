import './updatecategoryadmin.scss';
import {UpdateCategoryAdminController as controller} from './updatecategoryadmin.controller';
import template from './updatecategoryadmin.html';

export const updatecategoryadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'updatecategory',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
