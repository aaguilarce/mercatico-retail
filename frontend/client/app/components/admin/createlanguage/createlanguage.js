import angular from 'angular';
import {createlanguageDirective} from './createlanguage.directive';

export const createlanguage = angular.module('createlanguage', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('createlanguage', {
    url: '/createlanguage',
    template: '<createlanguage></createlanguage>'
  });
})
.directive('createlanguage', createlanguageDirective);
