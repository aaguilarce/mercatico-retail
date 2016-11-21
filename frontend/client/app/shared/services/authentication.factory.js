import {api} from './api';
import {authentication} from './authentication';
import angular from 'angular';

export const authenticationFactory = angular.module('authenticationFactory', [])
  .constant('API', api)
  .factory('Authentication', authentication);
  //Authentication name of factory

