'use strict';

import './listUser.scss';
import {ListUserController as controller} from './listUser.controller';
import template from './listUser.html';

export const listUserDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'listUser',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
