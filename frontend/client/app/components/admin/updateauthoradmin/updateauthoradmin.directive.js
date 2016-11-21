import './updateauthoradmin.scss';
import {UpdateAuthorAdminController as controller} from './updateauthoradmin.controller';
import template from './updateauthoradmin.html';

export const updateauthoradminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'updateauthor',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
