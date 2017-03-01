(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$q'];

			var TiendaService = function(lodash, $q) {
				var vm = this;

				vm.tiendas = [
					{codigo:'333', nombre:'STO ITAGUI 2', presupuesto_global:295287, presupuesto_tope:265758},
					{codigo:'334', nombre:'STO RIO NEGRO 2', presupuesto_global:295287, presupuesto_tope:265758},
					{codigo:'335', nombre:'STO LA CEJA', presupuesto_global:295287, presupuesto_tope:265758},
					{codigo:'336', nombre:'STO COPACABANA', presupuesto_global:295287, presupuesto_tope:265758},
					{codigo:'337', nombre:'STO SAN CRISTOBAL', presupuesto_global:297712, presupuesto_tope:267941},
					{codigo:'338', nombre:'STO BELLO', presupuesto_global:330561, presupuesto_tope:297504},
					{codigo:'339', nombre:'STO LA FLORESTA', presupuesto_global:297712, presupuesto_tope:267941},
					{codigo:'340', nombre:'STO SAN LUCAS', presupuesto_global:287548, presupuesto_tope:258793},
					{codigo:'341', nombre:'STO VILLANUEVA', presupuesto_global:295287, presupuesto_tope:265758},
					{codigo:'342', nombre:'STO CARABOBO', presupuesto_global:313189, presupuesto_tope:281870},
					{codigo:'343', nombre:'STO MILAGROSA', presupuesto_global:365395, presupuesto_tope:328856},
					{codigo:'344', nombre:'STO COLOMBIA', presupuesto_global:264333, presupuesto_tope:237899},
					{codigo:'345', nombre:'STO ITAGUI', presupuesto_global:295287, presupuesto_tope:265758},
					{codigo:'346', nombre:'STO BELEN', presupuesto_global:240136, presupuesto_tope:216122},
					{codigo:'347', nombre:'STO RIONEGRO', presupuesto_global:343681, presupuesto_tope:309313}
				];

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

					deferred.resolve(vm.tiendas);

					return deferred.promise;
				}

				function getTienda(codigo){
					var deferred = $q.defer();

					var tienda = lodash.find(vm.tiendas, function(t){
						return t.codigo == codigo;
					});

					deferred.resolve(tienda);

					return deferred.promise;
				}
			};

			TiendaService.$inject = ngDependencies;
			TiendaService.registeredName = 'TiendaService';
			return TiendaService;
		}
	);
})();
