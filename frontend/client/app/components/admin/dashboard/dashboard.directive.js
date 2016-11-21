//header admin directive
import './dashboard.scss';
import { DashboardController as controller } from './dashboard.controller';
import template from './dashboard.html';

export const dashboardDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'dashboard',
    restrict: 'E',
    scope: {},
    replace: true
  };
};
