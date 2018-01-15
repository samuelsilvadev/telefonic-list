angular
	.module('listaTelefonica')
	.config(function($routeProvider) {
		$routeProvider.when('/contatos', {
			templateUrl: 'view/contatos.html',
			controller: 'listaTelefonicaCtrl as listaTelefonica',
		}).when('/novo', {
			templateUrl: 'view/novo-contato.html',
			controller: 'novoContatoCtrl as novoContato',
		}).otherwise({
			redirectTo: '/contatos',
		});
	});

