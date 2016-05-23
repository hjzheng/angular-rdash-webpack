/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import template from './body.tpl.html';
import './body.scss';

export default class Body {

	constructor() {
		this.template = template;
		this.transclude = true;
	}
}

