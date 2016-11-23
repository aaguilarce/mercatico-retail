'use strict';

import angular from 'angular';
import {dashboardDirective} from './dashboard.directive';

export const dashboard = angular.module('dashboard', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>'
    });
  })
.directive('dashboard', dashboardDirective);
