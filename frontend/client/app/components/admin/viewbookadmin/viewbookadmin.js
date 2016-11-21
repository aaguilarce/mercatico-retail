import angular from 'angular';
import { viewbookadminDirective } from './viewbookadmin.directive';

export const viewbookadmin = angular.module('viewbookadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('viewbookadmin', {
            url: '/viewbookadmin/:bookId',
            template: '<viewbookadmin></viewbookadmin>'
        });
    })
    .directive('viewbookadmin', viewbookadminDirective);
