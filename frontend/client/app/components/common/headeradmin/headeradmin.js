import angular from 'angular';
import { headeradminDirective } from './headeradmin.directive';

export const headeradmin = angular.module('headeradmin', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('headeradmin', {
      url: '/',
      template: '<headeradmin></headeradmin>'
    });
  })
  .directive('headeradmin', headeradminDirective);    
