import './categoriesadmin.scss';
import {CategoriesAdminController as controller} from './categoriesadmin.controller';
import template from './categoriesadmin.html';

export const categoriesadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'categories',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
