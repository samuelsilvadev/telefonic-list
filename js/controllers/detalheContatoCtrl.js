angular
	.module('listaTelefonica')
	.controller('detalheContatoCtrl', function(
		contactsAPI,
		$routeParams) {
		log($routeParams);
		const detalheContato = this;

		detalheContato.contato = {};

		(function() {
			contactsAPI.getContact($routeParams.id)
				.then((resp) => detalheContato.contato = resp.data[0])
				.catch((err) => log(err));
		}());
	});
