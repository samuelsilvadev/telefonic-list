angular.module('listaTelefonica').factory('operatorsAPI', function($http) {

    const _endPoints = {
        operators: 'http://127.0.0.1:3412/operadoras'
    };

    const _getOperators = function() {
        return $http.get(_endPoints.operators);
    }

    return {
        getOperators: _getOperators
    }
})