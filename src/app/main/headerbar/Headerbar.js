/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import template from './headerbar.tpl.html';
import './headerbar.scss';
import sessionstorage from '../../utils/sessionstorage';

export default class Headerbar {

	constructor() {
		this.template = template;
		this.bindings = {
			username: '@',
			config: '='
		};
		this.controller = function() {
			this.logout = () => {
				sessionstorage.set('username', null);
				location.href = 'login.html';
			};
		};
	}
}
