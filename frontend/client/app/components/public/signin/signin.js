import angular from 'angular';
import {signinDirective} from './signin.directive';

export const signin = angular.module('signin', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('signin', {
    url: '/signin',
    template: '<signin></signin>'
  });
})
.directive('signin', signinDirective);
