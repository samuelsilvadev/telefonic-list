(function() {
	'use strict';

	angular
		.module('listaTelefonica')
		.directive('uiAlert', function() {
			return {
				templateUrl: 'view/alert.html',
				replace: false,
				restrict: 'E',
				scope: {
					error: '=',
				},
			};
		});
}());
