//todo directive
import './todo.scss';
import template from './todo.html';

export const todoDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope:{
		'todo':'=',//atributo val y el valor es igual al que le paso. = es para valores
		'removetodo': '&'//para utilizar los metodos del padre
	},
    replace: true
  };
};
