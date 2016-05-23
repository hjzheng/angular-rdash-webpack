/**
 * Created by hjzheng on 23/5/16.
 */
describe('MainController', () => {
	let vm;

	beforeEach(angular.mock.module('rdashApp'));

	beforeEach(angular.mock.inject($controller => {
		vm = $controller('MainCtrl');
	}));

	describe('#getNavigation', () => {

		let navigation;

		beforeEach(inject($state => {
			navigation = vm.getNavigation($state);
		}));

		it('return object should be Array', () => {
			expect(navigation).toEqual(jasmine.any(Array));
		});

		it('return object should be equal $state object', inject($state => {
			expect(navigation.length === $state.get().length).toBeTruthy();
		}));

		it('return object label property should be defined', () => {
			expect(navigation[1].label).toBeDefined();
		});

	});
});

