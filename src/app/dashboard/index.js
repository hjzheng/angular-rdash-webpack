/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import angular from 'angular';
import router from './dashboard.router';
import Stats from './Stats';

export default angular
	.module('rdashApp.dashboard', [])
	.component('rdashStats', new Stats())
	.config(router)
	.name;
