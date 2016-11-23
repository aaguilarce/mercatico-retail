'use strict';

import 'normalize.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Import visiter components
import {home} from './components/visiter/home/home';
import {auth} from './components/visiter/auth/auth';
import {viewbook} from './components/visiter/viewbook/viewbook';
import {cart} from './components/visiter/cart/cart';

// Import commom components
import {cardProductAdmin} from './components/common/cardProductAdmin/cardProductAdmin';
import {header} from './components/common/header/header';
import {footer} from './components/common/footer/footer';

// Import admin components
import {dashboard} from './components/admin/dashboard/dashboard';
import {createProduct} from './components/admin/createProduct/createProduct';
import {listProduct} from './components/admin/listProduct/listProduct';
import {editProduct} from './components/admin/editProduct/editProduct';
import {createCategory} from './components/admin/createCategory/createCategory';
import {listCategory} from './components/admin/listCategory/listCategory';
import {listUser} from './components/admin/listUser/listUser';

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
  viewbook.name,
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
  listUser.name
])
.directive('app', appDirective);
