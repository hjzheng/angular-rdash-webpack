/**
 * Created by hjzheng on 23/5/16.
 */
describe('LoginController', () => {
	let vm, httpBackend;

	beforeEach(angular.mock.module('rdashLogin'));

	beforeEach(angular.mock.inject(($controller, $httpBackend) => {
		httpBackend = $httpBackend;
		vm = $controller('LoginCtrl');
	}));

	describe('#login', () => {

		it('后端验证不通过', () => {
			// 注意GET等都要大写 https://segmentfault.com/a/1190000003716613
			httpBackend.when('POST', '/login').respond(
				{success: false, msg: '请检查用户名及密码!'}
			);

			vm.login();

			httpBackend.flush();

			expect(vm.msg).toEqual('请检查用户名及密码!');
		});

		it('后端验证通过', () => {
			httpBackend.when('POST', '/login').respond(
				{success: true}
			);

			vm.login();

			httpBackend.flush();

			expect(location.href).toEqual('http://localhost:9876/context.html');
		});

	});
});

