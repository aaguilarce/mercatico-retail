import angular from 'angular';
import {footerDirective} from './footer.directive';

export const footer = angular.module('footer', [])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('footer', {
    url: '/',
    template: '<footer></footer>'
  });

  $locationProvider.html5Mode(true);
})
.directive('appfooter', footerDirective);
