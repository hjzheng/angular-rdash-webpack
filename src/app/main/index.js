/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
 
import angular from 'angular';
import Sidebar from './sidebar/Sidebar';
import MainCtrl from './MainCtrl';

export default angular
	.module('rdashApp.main', [])
	.component('rdashSidebar', new Sidebar())
	.controller('MainCtrl', MainCtrl)
	.name;
