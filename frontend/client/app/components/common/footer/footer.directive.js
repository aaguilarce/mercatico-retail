//footer directive
import './footer.scss';
import template from './footer.html';

export const footerDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
