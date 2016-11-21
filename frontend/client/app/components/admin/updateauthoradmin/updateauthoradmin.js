import angular from 'angular';
import { updateauthoradminDirective } from './updateauthoradmin.directive';

export const updateauthoradmin = angular.module('updateauthoradmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('updateauthoradmin', {
            url: '/updateauthoradmin/:authorId',
            template: '<updateauthoradmin></updateauthoradmin>'
        });
    })
    .directive('updateauthoradmin', updateauthoradminDirective);
