angular
	.module('serialGenerator', [])
	.provider('serialGenerator', function() {
		this.$get = function() {
			return {
				generate: function generate() {
					let serial = '';
					while (serial.length < 20) {
						serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
					};
					return serial;
				},
			};
		};
	});
