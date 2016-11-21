import angular from 'angular';
import { booksDirective } from './books.directive';
import {dropdownDirective} from '../../dropdown.directive';

export const books = angular.module('books', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('books', {
            url: '/books',
            template: '<books></books>'
        });
    })
    .directive('books', booksDirective)
    .directive('dropdownMenu',  [ dropdownDirective]);;
