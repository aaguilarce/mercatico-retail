import './authorsadmin.scss';
import {AuthorsAdminController as controller} from './authorsadmin.controller';
import template from './authorsadmin.html';

export const authorsadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'authors',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
