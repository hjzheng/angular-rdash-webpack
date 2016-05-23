/**
 * @Author: hjzheng
 * @Date: 16/5/23
 */
import inject from '../utils/inject';
import sessionstorage from '../utils/sessionstorage';

@inject('$state', '$rootScope')
export default class MainCtrl {

	constructor($state, $rootScope) {
		this.toggle = false;
		this.navigation = {
			title: $state.current.label,
			links: this.getNavigation($state)
		};
		this.username = sessionstorage.get('username');
		this.init($rootScope);
	}

	getNavigation($state) {
		return $state.get();
	}

	init($rootScope) {
		var $stateChangeStartCallback = $rootScope.$on('$stateChangeStart', (event, toState) => {
			this.navigation.title = toState.label;
		});

		$rootScope.$on('$destroy', $stateChangeStartCallback);
	}
}
