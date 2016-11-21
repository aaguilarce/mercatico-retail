import angular from 'angular';
import { languagesadminDirective } from './languagesadmin.directive';

export const languagesadmin = angular.module('languagesadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('languagesadmin', {
            url: '/languagesadmin',
            template: '<languagesadmin></languagesadmin>'
        });
    })
    .directive('languagesadmin', languagesadminDirective);