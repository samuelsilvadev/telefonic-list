angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $http) {
    
    $scope.titleApp = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];
    
    const endPoints = {
        contatos: 'http://127.0.0.1:3412/contatos',
        operadoras : 'http://127.0.0.1:3412/operadoras'
    };

    const carregarContatos = (function() {
        $http.get(endPoints.contatos)
            .then(response => $scope.contatos = response.data)
            .catch(err => log(err));
    })();

    const carregarOperadoras = (function() {
        $http.get(endPoints.operadoras)
            .then(response => $scope.operadoras = response.data)
            .catch(err => log(err));
    })();

    $scope.adicionarContato = function(contato) {
        contato.selecionado = false;
        contato.data = new Date();				
        $http.post(endPoints.contatos, contato)
            .then(response => {
                $scope.contatos.push(contato);
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
            })
            .catch(err => log(err));			
    }

    $scope.removerContatos = function(contatos) {
        $scope.contatos = contatos.filter(contato => !contato.selecionado);				
    }

    $scope.isContatoSelecionado = function(contatos) {
        log(contatos);
        return contatos.some(contato => contato.selecionado);
    }

    
});