import './header.scss';
import {HeaderController as controller} from './header.controller';
import template from './header.html';

export const headerDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'header',
    restrict: 'E',
    scope: {},
    replace: true
  };
};
