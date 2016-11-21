import './booksadmin.scss';
import {BooksAdminController as controller} from './booksadmin.controller';
import template from './booksadmin.html';

export const booksadminDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'books',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
