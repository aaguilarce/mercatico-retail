import './createauthor.scss';
import { CreateAuthorController as controller } from './createauthor.controller';
import template from './createauthor.html';

export const  createauthorDirective = () => {
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
