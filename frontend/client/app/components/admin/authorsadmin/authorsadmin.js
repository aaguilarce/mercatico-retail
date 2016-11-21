import angular from 'angular';
import { authorsadminDirective } from './authorsadmin.directive';

export const authorsadmin = angular.module('authorsadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('authorsadmin', {
            url: '/authorsadmin',
            template: '<authorsadmin></authorsadmin>'
        });
    })
    .directive('authorsadmin', authorsadminDirective);