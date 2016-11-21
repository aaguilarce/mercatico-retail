import './books.scss';
import {BooksController as controller} from './books.controller';
import template from './books.html';

export const booksDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'books',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
