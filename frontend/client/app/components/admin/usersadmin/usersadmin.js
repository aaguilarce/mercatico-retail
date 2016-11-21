import angular from 'angular';
import { usersadminDirective } from './usersadmin.directive';

export const usersadmin = angular.module('usersadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('usersadmin', {
            url: '/usersadmin',
            template: '<usersadmin></usersadmin>'
        });
    })
    .directive('usersadmin', usersadminDirective);