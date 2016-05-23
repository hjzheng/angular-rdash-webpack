/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import template from './sidebar.tpl.html';
import './sidebar.scss';

export default class Sidebar {

	constructor() {
		this.template = template;
		this.bindings = {
			toggle: '@',
			navigation: '='
		};
		this.controller = function() {
			this.expend = (this.toggle === 'true');
			this.toggleSidebar = () => {
				this.expend = !this.expend;
			};
		};
	}
}
