import {api} from './api';
import {categories} from './categories';
import angular from 'angular';

export const categoriesFactory = angular.module('categoriesFactory', [])
  .constant('API', api)
  .factory('Categories', categories);
  //Categories name of factory
