// we don't need to use a variable
// or the from keyword when importing a css/styl file
// thanks the the styles loader it gets added as a
// <style> tag in the head by default but can be changed
import 'normalize.css';
import {appDirective} from './app.directive';
// the angular libs are just common js
// and therefore we can assume they were
// exported using the default keyword in ES2015
// so we can import each module
// with any name we see fit.
// Note that the actual value are just strings except angular itself
// because that's how angular decided to export
// their auxillary modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

//import components
import {home} from './components/public/home/home';
import {contact} from './components/public/contact/contact';
import {books} from './components/public/books/books';
import {signin} from './components/public/signin/signin';
import {viewbook} from './components/public/viewbook/viewbook';
import {cart} from './components/public/cart/cart';
import {header} from './components/common/header/header';
import {headeradmin} from './components/common/headeradmin/headeradmin';
import {footer} from './components/common/footer/footer';
import {bookcard} from './components/common/bookcard/bookcard';

//import admin components
import {profileadmin} from './components/admin/profileadmin/profileadmin';
import {createbook} from './components/admin/createbook/createbook';
import {createlanguage} from './components/admin/createlanguage/createlanguage';
import {booksadmin} from './components/admin/booksadmin/booksadmin';
import {languagesadmin} from './components/admin/languagesadmin/languagesadmin';
import {updatelanguageadmin} from './components/admin/updatelanguageadmin/updatelanguageadmin';
import {createcategory} from './components/admin/createcategory/createcategory';
import {categoriesadmin} from './components/admin/categoriesadmin/categoriesadmin';
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
import {authenticationFactory} from './shared/services/authentication.factory';
import {booksFactory} from './shared/services/books.factory';
import {categoriesFactory} from  './shared/services/categories.factory';
import {languagesFactory} from  './shared/services/languages.factory';
import {publishersFactory} from  './shared/services/publishers.factory';
import {authorsFactory} from  './shared/services/authors.factory';

//import libraries
import 'font-awesome/css/font-awesome.css';
import 'jquery';
import 'bootstrap-sass';
import 'bootstrap-validator';

angular.module('app', [
  uiRouter,
  ngAnimate,
  // home is the module, the angular module
  // because that's what we exported in home.js
  // all angular modules have a name
  // property who's value is the name you set the
  // module to be
  home.name,
  contact.name,
  books.name,
  booksadmin.name,
  signin.name,
  profileadmin.name,
  createbook.name,
  createlanguage.name,
  createcategory.name,
  languagesadmin.name,
  updatelanguageadmin.name,
  categoriesadmin.name,
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
  headeradmin.name,
  footer.name,
  bookcard.name,
  cart.name,
  authenticationFactory.name,
  booksFactory.name,
  categoriesFactory.name,
  languagesFactory.name,
  publishersFactory.name,
  authorsFactory.name
])
.directive('app', appDirective);
