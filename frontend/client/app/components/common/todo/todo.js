import angular from 'angular';
import {todoDirective} from './todo.directive';

// placing an export in front of ar var is the same
// as exporting the var at the end of the file
// using export {varname}
export const todo = angular.module('todo', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('todo', {
    url: '/',
    template: '<todo-item></todo-item>'
  });
})
.directive('todoItem', todoDirective);
