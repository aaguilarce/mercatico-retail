import './profileadmin.scss';
import { ProfileAdminController as controller } from './profileadmin.controller';
import template from './profileadmin.html';

export const profileadminDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'profile',
    restrict: 'E',
    replace: true,
    scope: {}    
  };
};
