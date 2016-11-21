import {api} from './api';
import {books} from './books';
import angular from 'angular';

export const booksFactory = angular.module('booksFactory', [])
  .constant('API', api)
  .factory('Books', books);
  //Books name of factory
