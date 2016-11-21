import './languagesadmin.scss';
import {LanguagesAdminController as controller} from './languagesadmin.controller';
import template from './languagesadmin.html';

export const languagesadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'languages',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
