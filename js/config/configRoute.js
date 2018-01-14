angular
	.module('listaTelefonica')
	.config(function($routeProvider) {
		$routeProvider.when('/contatos', {
			templateUrl: 'view/contatos.html',
			controller: 'listaTelefonicaCtrl as listaTelefonica',
		}).otherwise({
			redirectTo: '/index.html',
		});
	});

