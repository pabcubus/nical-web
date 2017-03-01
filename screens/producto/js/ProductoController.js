(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash'];

			var ProductoController = function(lodash) {
				var vm				= this;

				vm.currentProducto	= {};
				vm.productos		= [{
						"id": 100123,
						"precio": 8504,
						"nombre": "pariatur officia",
						"activo": true

					},
					{
						"id": 100124,
						"precio": 15014,
						"nombre": "magna sit",
						"activo": true

					},
					{
						"id": 100125,
						"precio": 10455,
						"nombre": "Lorem qui",
						"activo": true

					},
					{
						"id": 100126,
						"precio": 5613,
						"nombre": "laboris commodo",
						"activo": true

					},
					{
						"id": 100127,
						"precio": 17862,
						"nombre": "pariatur veniam",
						"activo": true

					},
					{
						"id": 100128,
						"precio": 6258,
						"nombre": "ullamco incididunt",
						"activo": true

					},
					{
						"id": 100129,
						"precio": 6448,
						"nombre": "aliqua aliquip",
						"activo": true

					},
					{
						"id": 100130,
						"precio": 10175,
						"nombre": "aliqua consequat",
						"activo": true

					},
					{
						"id": 100131,
						"precio": 11917,
						"nombre": "quis labore",
						"activo": true

					},
					{
						"id": 100132,
						"precio": 17441,
						"nombre": "amet exercitation",
						"activo": true

					},
					{
						"id": 100133,
						"precio": 12700,
						"nombre": "do ipsum",
						"activo": true

					},
					{
						"id": 100134,
						"precio": 9896,
						"nombre": "ea cupidatat",
						"activo": true

					},
					{
						"id": 100135,
						"precio": 5929,
						"nombre": "deserunt magna",
						"activo": true

					},
					{
						"id": 100136,
						"precio": 7549,
						"nombre": "consequat officia",
						"activo": true

					},
					{
						"id": 100137,
						"precio": 13966,
						"nombre": "mollit voluptate",
						"activo": true

					}
				];

				vm.setCurrentProducto	= setCurrentProducto;
				vm.saveProducto			= saveProducto;

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
			};

			ProductoController.$inject = ngDependencies;
			ProductoController.registeredName = 'ProductoController';
			return ProductoController;
		}
	);
})();
