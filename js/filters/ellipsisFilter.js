angular
	.module('listaTelefonica')
	.filter('ellipsis', function() {
		return function(input) {
			const _amount = 10;
			if (input.length <= _amount) {
				return input;
			}
			return input.substring(0, _amount) + '...';
		};
	});
