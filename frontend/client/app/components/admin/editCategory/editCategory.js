'use strict';

import angular from 'angular';
import {editCategoryDirective} from './editCategory.directive';

export const editCategory = angular.module('editCategory', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.edit-category', {
      parent: 'dashboard',
      url: '/edit-category',
      params: { categoryId: null },
      template: '<edit-category></edit-category>'
    });
  })
.directive('editCategory', editCategoryDirective);
