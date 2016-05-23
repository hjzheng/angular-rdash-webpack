/**
 * Created by hjzheng on 16/5/23.
 */

import template from './example.partial.html';

function router($stateProvider) {

	$stateProvider
		.state('example', {
			url: '/example',
			template: template,
			label: 'Example',
			icon: 'glyphicon-tint'
		});
}

router.$inject = ['$stateProvider'];

export default router;

