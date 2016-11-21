import './updatelanguageadmin.scss';
import {UpdateLanguageAdminController as controller} from './updatelanguageadmin.controller';
import template from './updatelanguageadmin.html';

export const updatelanguageadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'updatelanguage',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
