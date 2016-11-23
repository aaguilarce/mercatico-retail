'use strict';

import './auth.scss';
import {AuthController as controller} from './auth.controller';
import template from './auth.html';

export const authDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'auth',
    restrict: 'E',
    replace: true,
    scope: {},
    link: function(scope, element, attrs) {
      $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active-tab');
        $(this).addClass('active-tab');
        e.preventDefault();
      });
      $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active-tab');
        $(this).addClass('active-tab');
        e.preventDefault();
      });
    }
  };
};
