/**
 * @Author: hjzheng
 * @Date: 16/5/24
 */
import template from './stats.tpl.html';
import './stats.scss';

export default class Stats {

	constructor() {
		this.bindings = {
			'comments': '@',
			'number': '@',
			'colour': '@',
			'type': '@',
			'goto': '@'
		};
		this.template = template;
	}
}
