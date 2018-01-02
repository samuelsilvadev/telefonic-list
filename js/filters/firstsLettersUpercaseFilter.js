angular
	.module('listaTelefonica')
	.filter('firstslettersupercase', function() {
		return function(input) {
			const listPartsName = input.split(' ');
			const listPartsNameFormatted = listPartsName
				.map((partName) => {
					if (partName.length < 2) return partName;
					return partName.charAt(0).toUpperCase()
						+ partName.substring(1).toLowerCase();
				}
				);
			return listPartsNameFormatted.join(' ');
		};
	});
