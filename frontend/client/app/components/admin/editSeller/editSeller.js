'use strict';

import angular from 'angular';
import {editSellerDirective} from './editSeller.directive';

export const editSeller = angular.module('editSeller', [])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.edit-seller', {
      parent: 'dashboard',
      url: '/edit-seller',
      params: { sellerId: null },
      template: '<edit-seller></edit-seller>'
    });
  })
.directive('editSeller', editSellerDirective);
