import './bookcardadmin.scss';
import template from './bookcardadmin.html';

export const bookcardadminDirective = () => {
  return {
    template,
    restrict: 'E',
    scope: {
      'bookcard': '=',//atributo val y el valor es igual al que le paso. = es para valores
      'openbookcard': '&',//para utilizar los metodos del padre
      'updatecard':'&',
      'removecard':"&"
    },
    replace: true
  };
};
