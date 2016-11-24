'use strict';

import {api} from './services/api';
import {authentication} from './services/authentication';
import {products} from './services/products';
import {categories} from './services/categories';
import {sellers} from './services/sellers';

import angular from 'angular';

export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Authentication', authentication)
  .factory('Products', products)
  .factory('Categories', categories)
  .factory('Sellers', sellers);
