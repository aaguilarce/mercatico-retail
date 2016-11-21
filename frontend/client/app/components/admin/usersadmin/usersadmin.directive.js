import './usersadmin.scss';
import {UsersAdminController as controller} from './usersadmin.controller';
import template from './usersadmin.html';

export const usersadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'users',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
