import angular from 'angular';
import {createcategoryDirective} from './createcategory.directive';

export const createcategory = angular.module('createcategory', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('createcategory', {
    url: '/createcategory',
    template: '<createcategory></createcategory>'
  });
})
.directive('createcategory', createcategoryDirective);   
