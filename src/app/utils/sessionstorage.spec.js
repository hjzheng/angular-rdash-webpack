import sessionstorage from './sessionstorage';

describe('sessionstorage', () => {

	describe('#get', () => {

		it('get value should be equal set value when value is string', () => {
			sessionstorage.set('name', 'hjzheng');
			expect(sessionstorage.get('name')).toEqual('hjzheng');
		});

		it('get value should be equal set value when value is number', () => {
			sessionstorage.set('name', 123);
			expect(sessionstorage.get('name')).toEqual(123);
		})

		it('get value should be equal set value when value is object', () => {
			sessionstorage.set('name', {name: 'hjzheng', age: 18});
			expect(sessionstorage.get('name')).toEqual({name: 'hjzheng', age: 18});
		});

	});
});

