'use strict';

import angular from 'angular';
import {createCategoryDirective} from './createCategory.directive';

export const createCategory = angular.module('createCategory', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.create-category', {
      parent: 'dashboard',
      url: '/create-category',
      template: '<create-category></create-category>'
    });
  })
.directive('createCategory', createCategoryDirective);
