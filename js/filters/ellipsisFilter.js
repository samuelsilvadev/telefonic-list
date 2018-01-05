angular
	.module('listaTelefonica')
	.filter('ellipsis', function() {
		return function(input) {
			log(input);
			return input;
		};
	});
