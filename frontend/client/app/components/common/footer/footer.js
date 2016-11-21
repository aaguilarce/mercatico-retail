import angular from 'angular';
import {footerDirective} from './footer.directive';

export const footer = angular.module('footer', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('footer', {
    url: '/',
    template: '<footer></footer>'
  });
})
.directive('appfooter', footerDirective);
