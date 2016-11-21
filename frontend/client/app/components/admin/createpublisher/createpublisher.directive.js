import './createpublisher.scss';
import { CreatePublisherController as controller } from './createpublisher.controller';
import template from './createpublisher.html';

export const  createpublisherDirective = () => {
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
