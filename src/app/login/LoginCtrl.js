/**
 * @Author: hjzheng
 * @Date: 23/5/23
 */
import inject from '../utils/inject';
import './login.scss';
import sessionstorage from '../utils/sessionstorage';

@inject('$http')
export default class LoginCtrl {

	constructor($http) {
		this.$http = $http;
		this.user = {
			username: '',
			password: ''
		};
		this.msg = '';
	}

	login() {
		this.$http.post('/login', this.user)
			.then(res => {
				if (res.data.success) {
					sessionstorage.set('username', this.user.username);
					location.href = '/';
				} else {
					this.msg = res.data.msg;
				}
			}, res => {
				this.msg = res.data.msg;
			});
	}
}
