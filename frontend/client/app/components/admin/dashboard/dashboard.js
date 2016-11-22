'use strict';

import {dashboardDirective} from './dashboard.directive';
import angular from 'angular';

export const dashboard = angular.module('dashboard', [])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>'
    });

    $locationProvider.html5Mode(true);
  })
.directive('dashboard', dashboardDirective);
