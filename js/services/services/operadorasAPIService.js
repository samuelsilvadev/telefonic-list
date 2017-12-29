angular
    .module('listaTelefonica')
    .service('operatorsAPI', function($http, config) {
    
    const _endPoints = {
        operators: config.baseUrl + '/operadoras'
    };

    this.getOperators = function() {
        return $http.get(_endPoints.operators);
    }
});

// Using IIFE
// (function(){
//     'use strict';

//     angular
//         .module('Module')
//         .service('Service', ServiceOperators);

//     function ServiceOperators(Dependencies){

//         this.getOperators() = function() {
//             return $http.getOperators();
//         }        
//     }

// }());