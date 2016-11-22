'use strict';

import {listProductDirective} from './listProduct.directive';
import angular from 'angular';

export const listProduct = angular.module('listProduct', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.list-product', {
      parent: 'dashboard',
      url: '/list-product',
      template: '<list-product></list-product>'
    });
  })
.directive('listProduct', listProductDirective);
