import angular from 'angular';
import {homeDirective} from './home.directive';

export const home = angular.module('home', [])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });

  $locationProvider.html5Mode(true);
})
.directive('home', homeDirective);
