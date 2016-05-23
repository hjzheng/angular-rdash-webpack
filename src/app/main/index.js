/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import angular from 'angular';
import Sidebar from './sidebar/Sidebar';
import Body from './body/Body';
import Headerbar from './headerbar/Headerbar';
import MainCtrl from './MainCtrl';
import dropdown from '../../../node_modules/angular-ui-bootstrap/src/dropdown';

export default angular
	.module('rdashApp.main', [dropdown])
	.component('rdashSidebar', new Sidebar())
	.component('rdashBody', new Body())
	.component('rdashHeaderbar', new Headerbar())
	.controller('MainCtrl', MainCtrl)
	.name;
