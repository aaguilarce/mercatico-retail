'use strict';

import angular from 'angular';
import {fileReadDirective} from './fileRead/fileRead.directive';

export const common = angular.module('common', [])
  .directive('fileread', fileReadDirective);
