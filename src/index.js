import '../node_modules/bootstrap/dist/css/bootstrap.css';

import angular from '../node_modules/angular';
import ngResource from '../node_modules/angular-resource';
import uiRouter from '../node_modules/angular-ui-router';
import main from './app/main';
import dashboard from './app/dashboard';
import example from './app/example';

angular.module('rdashApp', [ngResource, uiRouter, main, dashboard, example]);
