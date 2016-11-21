import angular from 'angular';
import {bookcardadminDirective} from './bookcardadmin.directive';

export const bookcardadmin = angular.module('bookcardadmin', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('bookcardadmin', {
    url: '/',
    template: '<bookcard-item-admin></bookcard-item-admin>'
  });
})
.directive('bookcardItemAdmin', bookcardadminDirective);
