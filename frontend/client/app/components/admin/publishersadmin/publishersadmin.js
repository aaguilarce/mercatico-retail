import angular from 'angular';
import { publishersadminDirective } from './publishersadmin.directive';

export const publishersadmin = angular.module('publishersadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('publishersadmin', {
            url: '/publishersadmin',
            template: '<publishersadmin></publishersadmin>'
        });
    })
    .directive('publishersadmin', publishersadminDirective);