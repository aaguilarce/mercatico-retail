import './publishersadmin.scss';
import {PublishersAdminController as controller} from './publishersadmin.controller';
import template from './publishersadmin.html';

export const publishersadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'publishers',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
