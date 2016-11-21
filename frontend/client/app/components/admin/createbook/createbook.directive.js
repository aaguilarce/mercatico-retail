import './createbook.scss';
import { CreateBookController as controller } from './createbook.controller';
import template from './createbook.html';

export const createbookDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'create',
    restrict: 'E',
    replace: true,
    scope: {},
    link: function (scope, element, attrs) {
      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $('#preview_image').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }

      $("#image").change(function () {
        readURL(this);
      });

    }
  };
};
