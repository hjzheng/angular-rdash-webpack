/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import angular from 'angular';
import router from './example.router';

export default angular
	.module('rdashApp.example', [])
	.config(router)
	.name;
