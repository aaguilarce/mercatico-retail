import {api} from './api';
import {publishers} from './publishers';
import angular from 'angular';

export const publishersFactory = angular.module('publishersFactory', [])
  .constant('API', api)
  .factory('Publishers', publishers);
  //Publishers name of factory
