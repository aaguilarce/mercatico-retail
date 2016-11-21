import './viewbookadmin.scss';
import {ViewBookAdminController as controller} from './viewbookadmin.controller';
import template from './viewbookadmin.html';

export const viewbookadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'viewbook',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
