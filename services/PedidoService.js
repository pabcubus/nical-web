(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$q'];

			var PedidoService = function(lodash, $q) {
				var vm = this;

				vm.pedidos = [{
						"items": [{
								"precio": 12839,
								"cantidad": 3,
								"nombre": "elit cillum",
								"id": 1
							},
							{
								"precio": 15185,
								"cantidad": 3,
								"nombre": "cillum sunt",
								"id": 15
							},
							{
								"precio": 13051,
								"cantidad": 1,
								"nombre": "amet quis",
								"id": 14
							}
						],
						"activo": true,
						"total": 203119,
						"creado": "01/03/2015",
						"tienda": 336,
						"id": 1
					},
					{
						"items": [{
								"precio": 13952,
								"cantidad": 1,
								"nombre": "elit proident",
								"id": 17
							},
							{
								"precio": 10395,
								"cantidad": 2,
								"nombre": "nulla nostrud",
								"id": 11
							},
							{
								"precio": 11995,
								"cantidad": 1,
								"nombre": "dolor magna",
								"id": 16
							}
						],
						"activo": true,
						"total": 256360,
						"creado": "06/07/2014",
						"tienda": 339,
						"id": 2
					},
					{
						"items": [{
								"precio": 12674,
								"cantidad": 3,
								"nombre": "irure sint",
								"id": 39
							},
							{
								"precio": 18002,
								"cantidad": 3,
								"nombre": "labore ullamco",
								"id": 37
							},
							{
								"precio": 14507,
								"cantidad": 1,
								"nombre": "minim esse",
								"id": 38
							}
						],
						"activo": true,
						"total": 264159,
						"creado": "27/12/2016",
						"tienda": 339,
						"id": 3
					},
					{
						"items": [{
								"precio": 19217,
								"cantidad": 2,
								"nombre": "qui excepteur",
								"id": 13
							},
							{
								"precio": 14204,
								"cantidad": 3,
								"nombre": "ullamco sunt",
								"id": 35
							},
							{
								"precio": 14490,
								"cantidad": 2,
								"nombre": "incididunt ipsum",
								"id": 16
							}
						],
						"activo": true,
						"total": 206595,
						"creado": "24/07/2016",
						"tienda": 333,
						"id": 4
					},
					{
						"items": [{
								"precio": 15603,
								"cantidad": 3,
								"nombre": "dolor deserunt",
								"id": 6
							},
							{
								"precio": 13550,
								"cantidad": 2,
								"nombre": "sit eu",
								"id": 39
							},
							{
								"precio": 18183,
								"cantidad": 3,
								"nombre": "ipsum do",
								"id": 18
							}
						],
						"activo": true,
						"total": 241084,
						"creado": "16/11/2014",
						"tienda": 338,
						"id": 5
					},
					{
						"items": [{
								"precio": 12552,
								"cantidad": 2,
								"nombre": "anim laboris",
								"id": 27
							},
							{
								"precio": 12603,
								"cantidad": 3,
								"nombre": "duis do",
								"id": 10
							},
							{
								"precio": 10740,
								"cantidad": 2,
								"nombre": "voluptate ex",
								"id": 6
							}
						],
						"activo": true,
						"total": 296196,
						"creado": "22/07/2014",
						"tienda": 338,
						"id": 6
					}
				];

				vm.getPedidos	= getPedidos;
				vm.toggleActivo = toggleActivo;

				function getPedidos() {
					var deferred = $q.defer();

					deferred.resolve(vm.pedidos);

					return deferred.promise;
				}

				function toggleActivo(pedido) {
					pedido.activo = !pedido.activo;
				}
			};

			PedidoService.$inject = ngDependencies;
			PedidoService.registeredName = 'PedidoService';
			return PedidoService;
		}
	);
})();
