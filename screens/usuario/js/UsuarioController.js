(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$scope', 'UsuarioService'];

			var UsuarioController = function(lodash, $scope, UsuarioService) {
				var vm = this;

				vm.currentUsuario	= {
					nombre: '',
					apellido: '',
					usuario: '',
					puede_hacer_pedidos: true,
					puede_hacer_pedidos_general: false
				};
				vm.usuarios				= [];

				vm.guardarUsuario		= guardarUsuario;
				vm.setCurrentUsuario	= setCurrentUsuario;

				function init(){
					UsuarioService.getUsuarios()
						.then(function(data){
							vm.usuarios	= data;
						});
				}

				function guardarUsuario(){
					UsuarioService.guardarUsuario(vm.currentUsuario)
						.then(function(data){
							init();
						});
				}

				function setCurrentUsuario(currentUsuario){
					vm.editUsuario		= currentUsuario.id ? true : false;
					vm.currentUsuario	= angular.copy(currentUsuario);
				}

				$scope.$on('$viewContentLoaded', function(){
					init();
				});
			};

			UsuarioController.$inject = ngDependencies;
			UsuarioController.registeredName = 'UsuarioController';
			return UsuarioController;
		}
	);
})();
