(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', 'lodash', 'ProductoService'];

			var ProductoController = function($scope, lodash, ProductoService) {
				var vm				= this;

				vm.currentProducto	= {};
				vm.productos		= [];

				vm.setCurrentProducto	= setCurrentProducto;
				vm.saveProducto			= saveProducto;

				function init(){
					ProductoService.getProductos()
						.then(function(prods){
							vm.productos = prods;
						});
				}

				function setCurrentProducto(currentProducto){
					vm.editProducto		= currentProducto.id ? true : false;
					vm.currentProducto	= angular.copy(currentProducto);
				}

				function saveProducto(){
					if (!vm.currentProducto.id) {
						vm.currentProducto.activo = true;
						vm.productos.push(vm.currentProducto);
					}
					$('#modificar_producto').modal('hide');
				}

				$scope.$on('$viewContentLoaded', function(){
					init();
				});
			};

			ProductoController.$inject = ngDependencies;
			ProductoController.registeredName = 'ProductoController';
			return ProductoController;
		}
	);
})();
