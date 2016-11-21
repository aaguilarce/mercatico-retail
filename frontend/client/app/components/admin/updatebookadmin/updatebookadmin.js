import angular from 'angular';
import {updatebookadminDirective} from './updatebookadmin.directive';
import {inputFileDirective} from '../../input.file.directive';

export const updatebookadmin = angular.module('updatebookadmin', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('updatebookadmin', {
    url: '/updatebookadmin/:bookId',
    template: '<updatebookadmin></updatebookadmin>'
  });
})
.directive('updatebookadmin', updatebookadminDirective)
.directive('fileInput',  ['$parse', inputFileDirective]);
