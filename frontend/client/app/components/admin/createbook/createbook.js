import angular from 'angular';
import {createbookDirective} from './createbook.directive';
import {inputFileDirective} from '../../input.file.directive';

export const createbook = angular.module('createbook', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('createbook', {
    url: '/createbook',
    template: '<createbook></createbook>'
  });
})
.directive('createbook', createbookDirective)
.directive('fileInput',  ['$parse', inputFileDirective]);
