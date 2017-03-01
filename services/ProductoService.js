(function() {
	'use strict';

	define(['moment'],
		function(moment) {
			var ngDependencies = ['lodash', '$q'];

			var ProductoService = function(lodash, $q) {
				var vm = this;

				vm.productos	= [{
						"id": 100123,
						"precio": 8504,
						"nombre": "pariatur officia",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100124,
						"precio": 15014,
						"nombre": "magna sit",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100125,
						"precio": 10455,
						"nombre": "Lorem qui",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100126,
						"precio": 5613,
						"nombre": "laboris commodo",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100127,
						"precio": 17862,
						"nombre": "pariatur veniam",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100128,
						"precio": 6258,
						"nombre": "ullamco incididunt",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100129,
						"precio": 6448,
						"nombre": "aliqua aliquip",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100130,
						"precio": 10175,
						"nombre": "aliqua consequat",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100131,
						"precio": 11917,
						"nombre": "quis labore",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100132,
						"precio": 17441,
						"nombre": "amet exercitation",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100133,
						"precio": 12700,
						"nombre": "do ipsum",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100134,
						"precio": 9896,
						"nombre": "ea cupidatat",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100135,
						"precio": 5929,
						"nombre": "deserunt magna",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100136,
						"precio": 7549,
						"nombre": "consequat officia",
						"activo": true,
						"cantidad": 0
					},
					{
						"id": 100137,
						"precio": 13966,
						"nombre": "mollit voluptate",
						"activo": true,
						"cantidad": 0
					}
				];

				vm.getProductos	= getProductos;

				function getProductos(usuario) {
					var deferred = $q.defer();

					try {
						deferred.resolve(vm.productos);
					} catch (e) {
						deferred.reject();
					}

					return deferred.promise;
				}
			};

			ProductoService.$inject = ngDependencies;
			ProductoService.registeredName = 'ProductoService';
			return ProductoService;
		}
	);
})();
