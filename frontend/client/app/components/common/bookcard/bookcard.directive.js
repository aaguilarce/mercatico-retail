//bookcard directive
import './bookcard.scss';
import template from './bookcard.html';

export const bookcardDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope:{
		'bookcard':'=',//atributo val y el valor es igual al que le paso. = es para valores
        'openbookcard': '&'//para utilizar los metodos del padre
	},
    replace: true
  };
};
