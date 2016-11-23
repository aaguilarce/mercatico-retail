import angular from 'angular';
import { viewbookDirective } from './viewbook.directive';

export const viewbook = angular.module('viewbook', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('viewbook', {
            url: '/viewbook/:bookId',
            template: '<viewbook></viewbook>'
        });
    })
    .directive('viewbook', viewbookDirective);
