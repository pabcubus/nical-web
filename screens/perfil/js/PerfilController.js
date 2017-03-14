(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', 'lodash', 'HelperService', 'UsuarioService'];

			var PerfilController = function($scope, lodash, HelperService, UsuarioService) {
				var vm = this;

				vm.usuario			= {};

				vm.passActual		= '';
				vm.pass1			= '';
				vm.pass2			= '';

				vm.cambiarPassword	= cambiarPassword;

				function init() {
					var user = HelperService.storage.get(HelperService.constants.LOCALSTORAGE_USER_TAG, true);
					if (lodash.isObject(user)) {
						vm.usuario = user;
					}
				}

				function cambiarPassword() {
					if (vm.passActual != vm.usuario.password) {
						alert('La contraseña actual no coincide');
						return;
					}

					if (vm.pass1.length <= 3) {
						alert('Las contraseña nueva debe tener mas de 3 caracteres');
						return;
					}

					if (vm.pass1 != vm.pass2) {
						alert('Las contraseñas nuevas no coinciden');
						return;
					}

					vm.usuario.password = vm.pass1;
					UsuarioService.actualizarUsuario(vm.usuario)
						.then(function(data){
							alert('Contraseña cambiada correctamente!');
						})
						.catch(function(data){
							alert(data.message);
						});
				}

				$scope.$on('$viewContentLoaded', function(){
					init();
				});
			};

			PerfilController.$inject = ngDependencies;
			PerfilController.registeredName = 'PerfilController';
			return PerfilController;
		}
	);
})();
