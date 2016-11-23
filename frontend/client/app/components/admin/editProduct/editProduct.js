'use strict';

import {editProductDirective} from './editProduct.directive';
import angular from 'angular';

export const editProduct = angular.module('editProduct', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.edit-product', {
      parent: 'dashboard',
      url: '/edit-product',
      params: { productId: null },
      template: '<edit-product></edit-product>'
    });
})
.directive('editProduct', editProductDirective);
