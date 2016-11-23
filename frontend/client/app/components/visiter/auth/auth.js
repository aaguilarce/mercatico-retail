'use strict';

import angular from 'angular';
import {authDirective} from './auth.directive';

export const auth = angular.module('auth', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('auth', {
      url: '/auth',
      template: '<auth></auth>'
    });
  })
.directive('auth', authDirective);
