import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import angular from '../../../node_modules/angular';
import ngResource from '../../../node_modules/angular-resource';
import LoginCtrl from './LoginCtrl';

angular.module('rdashLogin', [ngResource])
	.controller('LoginCtrl', LoginCtrl).name;
