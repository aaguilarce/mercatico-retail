import angular from 'angular';
import {createpublisherDirective} from './createpublisher.directive';

export const createpublisher = angular.module('createpublisher', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('createpublisher', {
    url: '/createpublisher',
    template: '<createpublisher></createpublisher>'
  });
})
.directive('createpublisher', createpublisherDirective);   
