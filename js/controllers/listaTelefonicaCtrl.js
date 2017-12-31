angular
	.module('listaTelefonica')
	.controller('listaTelefonicaCtrl', function(
		$scope,
		contactsAPI,
		operatorsAPI,
		serialGenerator) {
		$scope.titleApp = 'Lista Telefonica';
		$scope.contatos = [];
		$scope.operadoras = [];

		/**
		 * carregar Contatos
		 * carregarOperadoras
		 */
		(function init() {
			contactsAPI.getContacts()
				.then((response) => $scope.contatos = response.data)
				.catch((err) => log(err));

			operatorsAPI.getOperators()
				.then((response) => $scope.operadoras = response.data)
				.catch((err) => log(err));
		})();

		$scope.adicionarContato = function(contato) {
			contato.selecionado = false;
			contato.data = new Date();
			contactsAPI.saveContact(contato)
				.then((response) => {
					$scope.contatos.push(contato);
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
				})
				.catch((err) => log(err));
		};

		$scope.removerContatos = function(contatos) {
			$scope.contatos = contatos.filter((contato) => !contato.selecionado);
		};

		$scope.isContatoSelecionado = function(contatos) {
			log(contatos);
			return contatos.some((contato) => contato.selecionado);
		};
	});
