import { api } from './services/api';
import { authentication } from './services/authentication';
import { products } from './services/products';

import angular from 'angular';

export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Authentication', authentication)
  .factory('Products', products);
