import {api} from './api';
import {authors} from './authors';
import angular from 'angular';

export const authorsFactory = angular.module('authorsFactory', [])
  .constant('API', api)
  .factory('Authors', authors);
  //Authors name of factory
