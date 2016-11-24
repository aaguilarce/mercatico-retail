'use strict';

import {listProductSellerDirective} from './listProductSeller.directive';
import angular from 'angular';

export const listProductSeller = angular.module('listProductSeller', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.list-product-seller', {
      parent: 'dashboard',
      url: '/list-product-seller',
      params: { sellerId: null },
      template: '<list-product-seller></list-product-seller>'
    });
  })
.directive('listProductSeller', listProductSellerDirective);
