'use strict';

import {cardProductDirective} from './cardProduct.directive';
import angular from 'angular';

export const cardProduct = angular.module('cardProduct', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('card-product', {
      parent: 'dashboard',
      url: '/card-product',
      template: '<card-product></card-product>'
    });
  })
.directive('cardProduct', cardProductDirective);
