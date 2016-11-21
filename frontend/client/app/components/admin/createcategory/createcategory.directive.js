import './createcategory.scss';
import { CreateCategoryController as controller } from './createcategory.controller';
import template from './createcategory.html';

export const  createcategoryDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'create',
    restrict: 'E',
    replace: true,
    scope: {},
    link: function (scope, element, attrs) {

    }
  };
};
