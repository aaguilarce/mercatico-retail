
import './signin.scss';
import {SigninController as controller} from './signin.controller';
import template from './signin.html';

export const signinDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'signin',
    restrict: 'E',
    replace: true,
    scope: {},
    link: function(scope, element, attrs) {
        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

        
    }
  };
};
