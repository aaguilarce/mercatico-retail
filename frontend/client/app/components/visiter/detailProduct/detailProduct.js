'use strict'

import angular from 'angular';
import {detailProductDirective} from './detailProduct.directive';

export const detailProduct = angular.module('detailProduct', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('detail-product', {
      url: '/detail-product',
      params: { productId: null },
      template: '<detail-product></detail-product>'
    });
  })
.directive('detailProduct', detailProductDirective);
