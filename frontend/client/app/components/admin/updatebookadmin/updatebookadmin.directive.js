import './updatebookadmin.scss';
import { UpdateBookAdminController as controller } from './updatebookadmin.controller';
import template from './updatebookadmin.html';

export const updatebookadminDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'update',
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
