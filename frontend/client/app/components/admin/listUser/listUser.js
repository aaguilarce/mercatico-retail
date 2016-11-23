'use strict';

import angular from 'angular';
import {listUserDirective} from './listUser.directive';

export const listUser = angular.module('listUser', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('dashboard.list-user', {
      parent: 'dashboard',
      url: '/list-user',
      template: '<list-user></list-user>'
    });
  })
.directive('listUser', listUserDirective);
