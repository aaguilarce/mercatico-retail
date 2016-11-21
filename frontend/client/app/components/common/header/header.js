import angular from 'angular';
import { headerDirective } from './header.directive';

export const header = angular.module('header', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('header', {
      url: '/',
      template: '<header></header>'
    });
  })
  .directive('appheader', headerDirective);
