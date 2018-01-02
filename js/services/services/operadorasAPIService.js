(function() {
	'use strict';

	angular
		.module('listaTelefonica')
		.service('operatorsAPI', ServiceOperators);

	/**
	 * Service to CRUD operators.
	 * @param {http} $http
	 * @param {config} config geral configs app
	 */
	function ServiceOperators($http, config) {
		const _endPoints = {
			operators: config.baseUrl + '/operadoras',
		};

		this.getOperators = function() {
			return $http.get(_endPoints.operators);
		};
	};
}());
