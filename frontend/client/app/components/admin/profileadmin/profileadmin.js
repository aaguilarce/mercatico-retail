import angular from 'angular';
import {profileadminDirective} from './profileadmin.directive';

export const profileadmin = angular.module('profileadmin', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('profileadmin', {
    url: '/profileadmin',
    template: '<profileadmin></profileadmin>'
  });
})
.directive('profileadmin', profileadminDirective);
