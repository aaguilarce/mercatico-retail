import angular from 'angular';
import { headerDirective } from './header.directive';

export const header = angular.module('header', [])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('header', {
      url: '/',
      template: '<header></header>'
    });

    $locationProvider.html5Mode(true);
  })
  .directive('appheader', headerDirective);
