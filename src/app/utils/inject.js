export default function inject(...list) {
	return function(target) {
		target.$inject = list;
	};
}
