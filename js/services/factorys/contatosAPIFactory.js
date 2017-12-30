angular.module('listaTelefonica').factory('contactsAPI', function($http) {
	const _endPoints = {
		contatcs: 'http://127.0.0.1:3412/contatos',
	};

	const _getContacts = function() {
		return $http.get(_endPoints.contatcs);
	};

	const _saveContact = function(contact) {
		return $http.post(_endPoints.contatcs, contact);
	};

	return {
		getContacts: _getContacts,
		saveContact: _saveContact,
	};
});
