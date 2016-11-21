import angular from 'angular';
import { updatepublisheradminDirective } from './updatepublisheradmin.directive';

export const updatepublisheradmin = angular.module('updatepublisheradmin', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('updatepublisheradmin', {
            url: '/updatepublisheradmin/:publisherId',
            template: '<updatepublisheradmin></updatepublisheradmin>'
        });
    })
    .directive('updatepublisheradmin', updatepublisheradminDirective);
