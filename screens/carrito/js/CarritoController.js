(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', 'lodash', 'SessionService', 'TiendaService', 'ProductoService'];

			var CarritoController = function($scope, lodash, SessionService, TiendaService, ProductoService) {
				var vm = this;

				vm.total			= 0;
				vm.porcentaje		= 0;
				vm.currentTienda	= {};
				vm.currentProductos = [];
				vm.tiendas			= [];
				vm.productos		= [];

				vm.recalcular		= recalcular;
				vm.limpiarCarrito	= limpiarCarrito;

				function init(){
					ProductoService.getProductos()
						.then(function(res){
							vm.productos = angular.copy(res);
						});

					var user = SessionService.getUser();

					if (user.puede_hacer_pedidos_general) {
						TiendaService.getTiendas()
							.then(function(res){
								vm.tiendas = res;
								vm.currentTienda = vm.tiendas[0];
							});
					} else {
						TiendaService.getTiendasByCodigo(user.tienda.toString())
							.then(function(res){
								vm.tiendas = res;
								vm.currentTienda = vm.tiendas[0];
							});
					}
				}

				function recalcular(){
					var valorTotal		= 0;
					vm.currentProductos	= [];

					lodash.forEach(vm.productos, function(prod){
						if (prod.cantidad < 0) 					prod.cantidad = 0;
						if (!lodash.isInteger(prod.cantidad)) 	prod.cantidad = Math.floor(prod.cantidad);

						valorTotal += (prod.precio * prod.cantidad);
						if (prod.cantidad > 0) {
							vm.currentProductos.push(prod);
						}
					});

					vm.total = valorTotal;
				}

				function limpiarCarrito(){
					var r = confirm('Seguro que desea limpiar el carrito?');
					if (r === true) {
						vm.total			= 0;
						vm.currentProductos = [];

						lodash.forEach(vm.productos, function(prod){
							prod.cantidad = 0;
						});
					}
				}

				$scope.$on('$viewContentLoaded', function(){
					init();
				});
			};

			CarritoController.$inject = ngDependencies;
			CarritoController.registeredName = 'CarritoController';
			return CarritoController;
		}
	);
})();
