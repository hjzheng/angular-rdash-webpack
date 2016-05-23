/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import angular from 'angular';
import router from './dashboard.router';

export default angular
	.module('rdashApp.dashboard', [])
	.config(router)
	.name;
