'use strict';

import {searchResultDirective} from './searchResult.directive';
import angular from 'angular';

export const searchResult = angular.module('searchResult', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('search-result', {
      url: '/search-result',
      params: { category: null, filter: null },
      template: '<search-result></search-result>'
    });
  })
.directive('searchResult', searchResultDirective);
