(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', 'lodash', 'TiendaService'];

			var TiendaController = function($scope, lodash, TiendaService) {
				var vm = this;

				vm.searchTiendaTerm = '';
				vm.currentTienda = {
					codigo: 0,
					nombre: '',
					presupuesto_global: 0,
					presupuesto_tope: 0
				};
				vm.tiendas = [];

				vm.getTiendasByCodigo = getTiendasByCodigo;
				vm.setCurrentTienda = setCurrentTienda;
				vm.saveTienda = saveTienda;

				$scope.$watch(
					function() {
						return vm.searchTiendaTerm;
					},
					function(newValue, oldValue) {
						if(newValue.length > 0 && newValue != oldValue){
							getTiendasByCodigo(vm.searchTiendaTerm);
						}
					}
				);

				function getTiendasByCodigo(codigo) {
					TiendaService.getTiendasByCodigo(codigo)
						.then(function(data) {
							vm.tiendas = data;
						});
				}

				function setCurrentTienda(currentTienda) {
					vm.editTienda = currentTienda.id ? true : false;
					vm.currentTienda = angular.copy(currentTienda);
				}

				function saveTienda() {
					if (!vm.currentProducto.id) {
						vm.currentProducto.activo = true;
						vm.productos.push(vm.currentProducto);
					}
					$('#modificar_tienda').modal('hide');
				}
			};

			TiendaController.$inject = ngDependencies;
			TiendaController.registeredName = 'TiendaController';
			return TiendaController;
		}
	);
})();
