'use strict';

import 'normalize.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Import visiter components
import {home} from './components/visiter/home/home';
import {auth} from './components/visiter/auth/auth';
import {detailProduct} from './components/visiter/detailProduct/detailProduct';
import {cart} from './components/visiter/cart/cart';
import {searchResult} from './components/visiter/searchResult/searchResult';

// Import commom components
import {cardProductAdmin} from './components/common/cardProductAdmin/cardProductAdmin';
import {cardProduct} from './components/common/cardProduct/cardProduct';
import {header} from './components/common/header/header';
import {footer} from './components/common/footer/footer';

// Import admin components
import {dashboard} from './components/admin/dashboard/dashboard';
import {listUser} from './components/admin/listUser/listUser';

import {createProduct} from './components/admin/createProduct/createProduct';
import {listProduct} from './components/admin/listProduct/listProduct';
import {editProduct} from './components/admin/editProduct/editProduct';

import {createCategory} from './components/admin/createCategory/createCategory';
import {listCategory} from './components/admin/listCategory/listCategory';
import {editCategory} from './components/admin/editCategory/editCategory';

import {createSeller} from './components/admin/createSeller/createSeller';
import {listSeller} from './components/admin/listSeller/listSeller';
import {editSeller} from './components/admin/editSeller/editSeller';

import {listProductSeller} from './components/admin/listProductSeller/listProductSeller';

// Import factories
import {shared} from './shared/shared';

//Import common simple directives
import {common} from './components/common/common';

//import libraries
import 'font-awesome/css/font-awesome.css';
import 'jquery';
import 'bootstrap-sass';
import 'bootstrap-validator';

angular.module('app', [
  uiRouter,
  shared.name,
  common.name,
  home.name,
  auth.name,
  detailProduct.name,
  cart.name,
  cardProductAdmin.name,
  header.name,
  footer.name,
  dashboard.name,
  createProduct.name,
  listProduct.name,
  editProduct.name,
  createCategory.name,
  listCategory.name,
  editCategory.name,
  listUser.name,
  createSeller.name,
  listSeller.name,
  editSeller.name,
  listProductSeller.name,
  cardProduct.name,
  searchResult.name
])
.directive('app', appDirective);
