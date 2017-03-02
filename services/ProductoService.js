(function() {
	'use strict';

	define(['moment'],
		function(moment) {
			var ngDependencies = ['lodash', '$q'];

			var ProductoService = function(lodash, $q) {
				var vm = this;

				vm.productos = [{
						"cantidad": 0,
						"activo": true,
						"nombre": "dolore nulla",
						"precio": 21786,
						"id": 1
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "minim duis",
						"precio": 26537,
						"id": 2
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "laborum proident",
						"precio": 19127,
						"id": 3
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "officia nostrud",
						"precio": 30933,
						"id": 4
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ea ut",
						"precio": 23379,
						"id": 5
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "veniam occaecat",
						"precio": 31297,
						"id": 6
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "tempor cupidatat",
						"precio": 43244,
						"id": 7
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "sunt enim",
						"precio": 27122,
						"id": 8
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "et non",
						"precio": 12733,
						"id": 9
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "consectetur ullamco",
						"precio": 41932,
						"id": 10
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "non reprehenderit",
						"precio": 36876,
						"id": 11
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "Lorem ad",
						"precio": 11977,
						"id": 12
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "magna minim",
						"precio": 19992,
						"id": 13
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "laboris dolore",
						"precio": 12862,
						"id": 14
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "in tempor",
						"precio": 29284,
						"id": 15
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "sunt magna",
						"precio": 25546,
						"id": 16
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ullamco fugiat",
						"precio": 28978,
						"id": 17
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "consequat exercitation",
						"precio": 23955,
						"id": 18
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "consectetur labore",
						"precio": 46835,
						"id": 19
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ipsum est",
						"precio": 33137,
						"id": 20
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "Lorem velit",
						"precio": 38857,
						"id": 21
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "enim eu",
						"precio": 17080,
						"id": 22
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "minim laborum",
						"precio": 37513,
						"id": 23
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "culpa quis",
						"precio": 39990,
						"id": 24
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "consectetur incididunt",
						"precio": 37378,
						"id": 25
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "dolor irure",
						"precio": 18419,
						"id": 26
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ut velit",
						"precio": 16650,
						"id": 27
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ullamco occaecat",
						"precio": 22507,
						"id": 28
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ullamco occaecat",
						"precio": 24944,
						"id": 29
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "dolor pariatur",
						"precio": 17804,
						"id": 30
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "exercitation nostrud",
						"precio": 32706,
						"id": 31
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "culpa sint",
						"precio": 42865,
						"id": 32
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "deserunt minim",
						"precio": 26326,
						"id": 33
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "in cillum",
						"precio": 28118,
						"id": 34
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ad eiusmod",
						"precio": 33653,
						"id": 35
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "irure nulla",
						"precio": 35786,
						"id": 36
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "enim ea",
						"precio": 30893,
						"id": 37
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "ea voluptate",
						"precio": 38200,
						"id": 38
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "nostrud labore",
						"precio": 11846,
						"id": 39
					},
					{
						"cantidad": 0,
						"activo": true,
						"nombre": "tempor adipisicing",
						"precio": 17729,
						"id": 40
					}
				];

				vm.getProductos = getProductos;

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
