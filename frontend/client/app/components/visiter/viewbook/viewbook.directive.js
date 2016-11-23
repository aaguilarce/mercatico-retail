import './viewbook.scss';
import {ViewBookController as controller} from './viewbook.controller';
import template from './viewbook.html';

export const viewbookDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'viewbook',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
