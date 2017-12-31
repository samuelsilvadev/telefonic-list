angular
	.module('listaTelefonica')
	.controller('listaTelefonicaCtrl', function(
		$scope,
		contactsAPI,
		operatorsAPI,
		serialGenerator) {
		log($scope);
		const listaTelefonica = this;
		listaTelefonica.titleApp = 'Lista Telefonica';
		listaTelefonica.contatos = [];
		listaTelefonica.operadoras = [];

		/**
		 * carregar Contatos
		 * carregarOperadoras
		 */
		(function init() {
			contactsAPI.getContacts()
				.then((response) => listaTelefonica.contatos = response.data)
				.catch((err) => log(err));

			operatorsAPI.getOperators()
				.then((response) => listaTelefonica.operadoras = response.data)
				.catch((err) => log(err));
		})();

		listaTelefonica.adicionarContato = function(contato) {
			contato.selecionado = false;
			contato.data = new Date();
			contactsAPI.saveContact(contato)
				.then((response) => {
					listaTelefonica.contatos.push(contato);
					delete listaTelefonica.contato;
					listaTelefonica.contatoForm.$setPristine();
				})
				.catch((err) => log(err));
		};

		listaTelefonica.removerContatos = function(contatos) {
			listaTelefonica.contatos = contatos
				.filter((contato) => !contato.selecionado);
		};

		listaTelefonica.isContatoSelecionado = function(contatos) {
			log(contatos);
			return contatos.some((contato) => contato.selecionado);
		};
	});
