import './contact.scss';
import {ContactController as controller} from './contact.controller';
import template from './contact.html';

export const contactDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'contact',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
