'use strict';

import angular from 'angular';
import {listSellerDirective} from './listSeller.directive';

export const listSeller = angular.module('listSeller', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.list-seller', {
      parent: 'dashboard',
      url: '/list-seller',
      template: '<list-seller></list-seller>'
    });
  })
.directive('listSeller', listSellerDirective);
