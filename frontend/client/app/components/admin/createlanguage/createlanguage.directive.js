import './createlanguage.scss';
import { CreateLanguageController as controller } from './createlanguage.controller';
import template from './createlanguage.html';

export const  createlanguageDirective = () => {
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
