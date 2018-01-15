angular
	.module('listaTelefonica')
	.controller('novoContatoCtrl', function(
		operatorsAPI,
		contactsAPI,
		serialGenerator,
		$location) {
		const novoContato = this;

		novoContato.operadoras = [];
		novoContato.error = '';

		/**
		 * carregar Operadoras
		 */
		(function init() {
			operatorsAPI.getOperators()
				.then((response) => novoContato.operadoras = response.data)
				.catch((err) => log(err));
		})();

		novoContato.adicionarContato = function(contato) {
			contato.selecionado = false;
			contato.data = new Date();
			contactsAPI.saveContact(contato)
				.then((response) => {
					delete novoContato.contato;
					novoContato.contatoForm.$setPristine();
					$location.path('/#!/contatos');
				})
				.catch((err) => log(err));
		};

		novoContato._setError = function(err) {
			novoContato.error = err;
		};
	});
