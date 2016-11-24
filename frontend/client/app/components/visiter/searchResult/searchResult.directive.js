'use strict';

import './searchResult.scss';
import {SearchResultController as controller} from './searchResult.controller';
import template from './searchResult.html';

export const searchResultDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'searchResult',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
