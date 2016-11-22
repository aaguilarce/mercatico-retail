'use strict';

import {dashboardDirective} from './dashboard.directive';
import angular from 'angular';

export const dashboard = angular.module('dashboard', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>'
    });
  })
.directive('dashboard', dashboardDirective);
