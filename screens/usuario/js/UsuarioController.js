(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$scope', 'UsuarioService', 'TiendaService'];

			var UsuarioController = function(lodash, $scope, UsuarioService, TiendaService) {
				var vm = this;

				vm.currentUsuario	= {
					nombre: '',
					apellido: '',
					usuario: '',
					email: '',
					tienda: '',
					puede_hacer_pedidos: true,
					puede_hacer_pedidos_general: false
				};

				vm.usuarios				= [];
				vm.tiendas				= [];

				vm.toggleActivo			= toggleActivo;
				vm.guardarUsuario		= guardarUsuario;
				vm.setCurrentUsuario	= setCurrentUsuario;

				function init(){
					cargarUsuarios();
					cargarTiendas();
				}

				function toggleActivo(usuario) {
					UsuarioService.toggleActivo(usuario);
					UsuarioService.getUsuarios()
						.then(function(data){
							vm.usuarios	= data;
						});
				}

				function guardarUsuario(){
					if (vm.editUsuario) {
						UsuarioService.actualizarUsuario(vm.currentUsuario)
							.then(function(data){
								init();
							});
					} else {
						UsuarioService.guardarUsuario(vm.currentUsuario)
							.then(function(data){
								init();
							});
					}
				}

				function cargarUsuarios(){
					UsuarioService.getUsuarios()
						.then(function(data){
							vm.usuarios	= data;
						});
				}

				function cargarTiendas(){
					TiendaService.getTiendas()
						.then(function(tiendas){
							vm.tiendas	= tiendas;
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
