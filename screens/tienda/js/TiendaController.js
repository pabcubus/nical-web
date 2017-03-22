(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', 'lodash', 'TiendaService', 'CiudadService'];

			var TiendaController = function($scope, lodash, TiendaService, CiudadService) {
				var vm = this;

				vm.searchTiendaTerm = '';
				vm.currentTienda = {
					codigo: 0,
					nombre: '',
					presupuesto_global: 0,
					presupuesto_tope: 0
				};
				vm.ciudades = [];
				vm.tiendas = [];
				vm.tiendasFiltered = [];

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

				function init(codigo) {
					TiendaService.getTiendas()
						.then(function(data) {
							vm.tiendas = data;
						});

					CiudadService.getCiudades()
						.then(function(data) {
							vm.ciudades = data;
						});
				}

				function getTiendasByCodigo(codigo) {
					if (!lodash.isString(codigo) || codigo.trim().length < 1) {
						vm.tiendasFiltered = [];
						return;
					}

					vm.tiendasFiltered = lodash.filter(vm.tiendas, function(tienda){
						return tienda.id.toString().indexOf(codigo) != -1;
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

				$scope.$on('$viewContentLoaded', function(){
					init();
				});
			};

			TiendaController.$inject = ngDependencies;
			TiendaController.registeredName = 'TiendaController';
			return TiendaController;
		}
	);
})();
