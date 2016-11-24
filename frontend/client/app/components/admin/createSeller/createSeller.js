'use strict';

import angular from 'angular';
import {createSellerDirective} from './createSeller.directive';

export const createSeller = angular.module('createSeller', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.create-seller', {
      parent: 'dashboard',
      url: '/create-seller',
      template: '<create-seller></create-seller>'
    });
  })
.directive('createSeller', createSellerDirective);
