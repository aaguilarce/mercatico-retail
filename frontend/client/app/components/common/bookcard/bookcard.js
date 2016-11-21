import angular from 'angular';
import {bookcardDirective} from './bookcard.directive';

export const bookcard = angular.module('bookcard', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('bookcard', {
    url: '/',
    template: '<bookcard-item></bookcard-item>'
  });
})
.directive('bookcardItem', bookcardDirective);
