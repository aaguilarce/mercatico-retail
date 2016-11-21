import angular from 'angular';
import {contactDirective} from './contact.directive';

export const contact = angular.module('contact', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('contact', {
    url: '/contact',
    template: '<contact></contact>'
  });
})
.directive('contact', contactDirective);
