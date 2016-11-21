import {api} from './api';
import {languages} from './languages';
import angular from 'angular';

export const languagesFactory = angular.module('languagesFactory', [])
  .constant('API', api)
  .factory('Languages', languages);
  //Languages name of factory
