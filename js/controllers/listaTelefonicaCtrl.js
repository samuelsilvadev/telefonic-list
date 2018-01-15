angular
	.module('listaTelefonica')
	.controller('listaTelefonicaCtrl', function(
		contactsAPI,
		operatorsAPI,
		serialGenerator) {
		const listaTelefonica = this;
		listaTelefonica.titleApp = 'Lista Telefonica';
		listaTelefonica.contatos = [];
		listaTelefonica.operadoras = [];
		listaTelefonica.error = '';

		/**
		 * carregar Contatos
		 */
		(function init() {
			contactsAPI.getContacts()
				.then((response) => listaTelefonica.contatos = response.data)
				.catch((err) => {
					log(err);
					listaTelefonica._setError('Não foi possível carregar os contatos');
				});
		})();

		listaTelefonica.removerContatos = function(contatos) {
			listaTelefonica.contatos = contatos
				.filter((contato) => !contato.selecionado);
		};

		listaTelefonica.isContatoSelecionado = function(contatos) {
			log(contatos);
			return contatos.some((contato) => contato.selecionado);
		};

		listaTelefonica._setError = function(err) {
			listaTelefonica.error = err;
		};
	});
