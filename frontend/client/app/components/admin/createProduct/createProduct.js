'use strict';

import {createProductDirective} from './createProduct.directive';
import angular from 'angular';

export const createProduct = angular.module('createProduct', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.create-product', {
      parent: 'dashboard',
      url: '/create-product',
      template: '<create-product></create-product>'
    });
})
.directive('createProduct', createProductDirective);
