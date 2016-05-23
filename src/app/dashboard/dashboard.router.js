/**
 * Created by hjzheng on 16/5/23.
 */

import template from './dashboard.partial.html';

function router($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			template: template,
			label: 'Dashboard',
			icon: 'glyphicon-dashboard'
		});

	$urlRouterProvider.otherwise('/dashboard');
}

router.$inject = ['$stateProvider', '$urlRouterProvider'];

export default router;

