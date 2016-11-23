'use strict';

import 'normalize.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

//import components
import {home} from './components/public/home/home';
import {books} from './components/public/books/books';
import {auth} from './components/public/auth/auth';
import {viewbook} from './components/public/viewbook/viewbook';
import {cart} from './components/public/cart/cart';
import {header} from './components/common/header/header';
import {footer} from './components/common/footer/footer';
import {bookcard} from './components/common/bookcard/bookcard';

import {cardProductAdmin} from './components/common/cardProductAdmin/cardProductAdmin';

//import admin components
import {dashboard} from './components/admin/dashboard/dashboard';
import {createProduct} from './components/admin/createProduct/createProduct';
import {createlanguage} from './components/admin/createlanguage/createlanguage';
import {listProduct} from './components/admin/listProduct/listProduct';
import {languagesadmin} from './components/admin/languagesadmin/languagesadmin';
import {updatelanguageadmin} from './components/admin/updatelanguageadmin/updatelanguageadmin';
import {createCategory} from './components/admin/createCategory/createCategory';
import {listCategory} from './components/admin/listCategory/listCategory';
import {updatecategoryadmin} from './components/admin/updatecategoryadmin/updatecategoryadmin';
import {authorsadmin} from './components/admin/authorsadmin/authorsadmin';
import {updateauthoradmin} from './components/admin/updateauthoradmin/updateauthoradmin';
import {createauthor} from './components/admin/createauthor/createauthor';
import {createpublisher} from './components/admin/createpublisher/createpublisher';
import {publishersadmin} from './components/admin/publishersadmin/publishersadmin';
import {updatepublisheradmin} from './components/admin/updatepublisheradmin/updatepublisheradmin';
import {bookcardadmin} from './components/common/bookcardadmin/bookcardadmin';
import {viewbookadmin} from './components/admin/viewbookadmin/viewbookadmin';
import {updatebookadmin} from './components/admin/updatebookadmin/updatebookadmin';
import {usersadmin} from './components/admin/usersadmin/usersadmin';

//Import factories
import {shared} from './shared/shared';

//import libraries
import 'font-awesome/css/font-awesome.css';
import 'jquery';
import 'bootstrap-sass';
import 'bootstrap-validator';

angular.module('app', [
  uiRouter,
  ngAnimate,
  home.name,
  dashboard.name,
  books.name,
  auth.name,
  createProduct.name,
  createlanguage.name,
  createCategory.name,
  languagesadmin.name,
  updatelanguageadmin.name,
  listCategory.name,
  updatecategoryadmin.name,
  authorsadmin.name,
  updateauthoradmin.name,
  createauthor.name,
  createpublisher.name,
  publishersadmin.name,
  updatepublisheradmin.name,
  bookcardadmin.name,
  viewbookadmin.name,
  updatebookadmin.name,
  usersadmin.name,
  viewbook.name,
  header.name,
  footer.name,
  bookcard.name,
  cart.name,
  shared.name,
  listProduct.name,
  cardProductAdmin.name
])
.directive('app', appDirective);
