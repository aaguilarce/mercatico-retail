import angular from 'angular';
import { booksadminDirective } from './booksadmin.directive';

export const booksadmin = angular.module('booksadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('booksadmin', {
            url: '/booksadmin',
            template: '<booksadmin></booksadmin>'
        });
    })
    .directive('booksadmin', booksadminDirective);