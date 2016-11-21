import angular from 'angular';
import { categoriesadminDirective } from './categoriesadmin.directive';

export const categoriesadmin = angular.module('categoriesadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('categoriesadmin', {
            url: '/categoriesadmin',
            template: '<categoriesadmin></categoriesadmin>'
        });
    })
    .directive('categoriesadmin', categoriesadminDirective);