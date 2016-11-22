'use strict';

import {cardProductAdminDirective} from './cardProductAdmin.directive';
import angular from 'angular';

export const cardProductAdmin = angular.module('cardProductAdmin', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.card-product-admin', {
      parent: 'dashboard',
      url: '/card-product-admin',
      template: '<card-product-admin></card-product-admin>'
    });
  })
.directive('cardProductAdmin', cardProductAdminDirective);
