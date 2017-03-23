(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$q', 'DataService'];

			var TiendaService = function(lodash, $q, DataService) {
				var vm = this;

				vm.tiendas = [];

				vm.guardarTienda		= guardarTienda;
				vm.getTienda			= getTienda;
				vm.getTiendas			= getTiendas;
				vm.getTiendasByCodigo	= getTiendasByCodigo;

				function guardarTienda(tienda){
					var deferred = $q.defer();

					try{
						tienda.creacion = moment().format('DD-MM-YYYY');

						vm.tiendas.push(tienda);

						deferred.resolve(true);
					} catch (e){
						deferred.reject();
					}

					return deferred.promise;
				}

				function getTiendasByCodigo(codigo){
					var deferred = $q.defer();

					var tiendas = lodash.filter(vm.tiendas, function(tnd){
						return tnd.codigo.indexOf(codigo) != -1;
					});

					deferred.resolve(tiendas);

					return deferred.promise;
				}

				function getTiendas(){
					var deferred = $q.defer();

					DataService.performOperation('/api/tienda/', 'GET')
						.then(function(result){
							vm.tiendas = result.data;
							deferred.resolve(result.data);
						})
						.catch(function(){
							vm.tiendas = [];
							deferred.resolve([]);
						});

					return deferred.promise;
				}

				function getTienda(codigo){
					var deferred = $q.defer();

					DataService.performOperation('/api/tienda/' + codigo, 'GET')
						.then(function(result){
							deferred.resolve(result.data);
						})
						.catch(function(){
							deferred.resolve([]);
						});

					return deferred.promise;
				}
			};

			TiendaService.$inject = ngDependencies;
			TiendaService.registeredName = 'TiendaService';
			return TiendaService;
		}
	);
})();
