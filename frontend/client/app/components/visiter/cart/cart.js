import angular from 'angular';
import {cartDirective} from './cart.directive';

export const cart = angular.module('cart', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('cart', {
    url: '/cart',
    template: '<cart></cart>'
  });
})
.directive('cart', cartDirective);
