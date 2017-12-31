(function() {
	'use strict';

	angular
		.module('listaTelefonica')
		.service('contactsAPI', ServiceContacts);

	/**
	 * Service to CRUD contacts.
	 * @param {http} $http
	 * @param {config} config geral configs app
	 */
	function ServiceContacts($http, config) {
		const _endPoints = {
			contatcs: config.baseUrl + '/contatos',
		};

		this.getContacts = function() {
			return $http.get(_endPoints.contatcs);
		};

		this.saveContact = function(contact) {
			return $http.post(_endPoints.contatcs, contact);
		};

		this.updateContact = function(contact) {
			return $http.put(_endPoints.contatcs, contact);
		};
	}
}());
