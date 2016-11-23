'use strict';

import angular from 'angular';
import {listCategoryDirective} from './listCategory.directive';

export const listCategory = angular.module('listCategory', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.list-category', {
      parent: 'dashboard',
      url: '/list-category',
      template: '<list-category></list-category>'
    });
  })
.directive('listCategory', listCategoryDirective);
