//header admin directive
import './headeradmin.scss';
import { HeaderAdminController as controller } from './headeradmin.controller';
import template from './headeradmin.html';

export const headeradminDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'header',
    restrict: 'E',
    scope: {},
    replace: true,
    link: function (scope, element, attrs) {
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $(".side-nav .collapse").on("hide.bs.collapse", function () {
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
        });
        $('.side-nav .collapse').on("show.bs.collapse", function () {
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
        });
      })

    }
  };
};
