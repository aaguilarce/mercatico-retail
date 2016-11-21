import angular from 'angular';
import { updatecategoryadminDirective } from './updatecategoryadmin.directive';

export const updatecategoryadmin = angular.module('updatecategoryadmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('updatecategoryadmin', {
            url: '/updatecategoryadmin/:categoryId',
            template: '<updatecategoryadmin></updatecategoryadmin>'
        });
    })
    .directive('updatecategoryadmin', updatecategoryadminDirective);
