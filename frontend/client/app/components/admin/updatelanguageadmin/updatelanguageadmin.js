import angular from 'angular';
import { updatelanguageadminDirective } from './updatelanguageadmin.directive';

export const updatelanguageadmin = angular.module('updatelanguageadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('updatelanguageadmin', {
            url: '/updatelanguageadmin/:languageId',
            template: '<updatelanguageadmin></updatelanguageadmin>'
        });
    })
    .directive('updatelanguageadmin', updatelanguageadminDirective);
