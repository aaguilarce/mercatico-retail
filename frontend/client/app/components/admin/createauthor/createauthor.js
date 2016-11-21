import angular from 'angular';
import {createauthorDirective} from './createauthor.directive';

export const createauthor = angular.module('createauthor', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('createauthor', {
    url: '/createauthor',
    template: '<createauthor></createauthor>'
  });
})
.directive('createauthor', createauthorDirective);   
