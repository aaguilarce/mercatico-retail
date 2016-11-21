import './updatepublisheradmin.scss';
import {UpdatePublisherAdminController as controller} from './updatepublisheradmin.controller';
import template from './updatepublisheradmin.html';

export const updatepublisheradminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'updatepublisher',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
