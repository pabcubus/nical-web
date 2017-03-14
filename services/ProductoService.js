(function() {
	'use strict';

	define(['moment'],
		function(moment) {
			var ngDependencies = ['lodash', '$q'];

			var ProductoService = function(lodash, $q) {
				var vm = this;

				vm.productos = [
					{id:1,precio:2000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4) TROQUELADO",medidas:"10,5x14",activo:true,cantidad:0},
					{id:2,precio:3000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4) TROQUELADO",medidas:"14X21",activo:true,cantidad:0},
					{id:3,precio:4000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4) TROQUELADO",medidas:"21x28",activo:true,cantidad:0},
					{id:4,precio:5000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0) TROQUELADO, GRAFADO Y ENSANDUCHADO",medidas:"20X8,5",activo:true,cantidad:0},
					{id:5,precio:6000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0) TROQUELADO, GRAFADO Y ENSANDUCHADO",medidas:"20X8,5",activo:true,cantidad:0},
					{id:6,precio:7000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0) TROQUELADO, GRAFADO Y ENSANDUCHADO",medidas:"20X8,5",activo:true,cantidad:0},
					{id:7,precio:8000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN MAULE CAL 48. UNIR DOS TAPAS PARA MAYOR RIGIDES (4X0) TROQUELADO, GRAFADO, CON 2 PUNTO DE CINTA DOBLE FAZ DE 3 CM C/U",medidas:"30x30",activo:true,cantidad:0},
					{id:8,precio:9000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN MAULE CAL 48. UNIR DOS TAPAS PARA MAYOR RIGIDES (4X0) TROQUELADO, GRAFADO, CON 2 PUNTO DE CINTA DOBLE FAZ DE 3 CM C/U",medidas:"30x30",activo:true,cantidad:0},
					{id:9,precio:10000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN MAULE CAL 48. UNIR DOS TAPAS PARA MAYOR RIGIDES (4X0) TROQUELADO, GRAFADO, CON 2 PUNTO DE CINTA DOBLE FAZ DE 3 CM C/U",medidas:"30x30",activo:true,cantidad:0},
					{id:10,precio:11000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4)",medidas:"35x50",activo:true,cantidad:0},
					{id:11,precio:12000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4)",medidas:"35x50",activo:true,cantidad:0},
					{id:12,precio:13000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4)",medidas:"35x50",activo:true,cantidad:0},
					{id:13,precio:14000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0), TROQUELADO CON 2 TRAMOS DE CINTA DOBLE FAZ DE 5 CM C/U",medidas:"30x12",activo:true,cantidad:0},
					{id:14,precio:15000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0), TROQUELADO CON 2 TRAMOS DE CINTA DOBLE FAZ DE 5 CM C/U",medidas:"40x13,5",activo:true,cantidad:0},
					{id:15,precio:16000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4)",medidas:"35x50",activo:true,cantidad:0},
					{id:16,precio:17000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4)",medidas:"21x28",activo:true,cantidad:0},
					{id:17,precio:18000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (3X3)",medidas:"21x28",activo:true,cantidad:0},
					{id:18,precio:19000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (4X4)",medidas:"35x50",activo:true,cantidad:0},
					{id:19,precio:20000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE PROPALCOTE 300g (3X3)",medidas:"35x50",activo:true,cantidad:0},
					{id:20,precio:21000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0), PLASTIFICADDO POR AMBAS CARAS TROQUELADO",medidas:"11x14",activo:true,cantidad:0},
					{id:21,precio:22000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0), TROQUELADO",medidas:"11x14",activo:true,cantidad:0},
					{id:22,precio:23000,nombre:"IMPRESIÓN EN LITOGRAFÍA SOBRE CARTÓN AMERICA CAL. 36 (4X0), TROQUELADO",medidas:"11x14",activo:true,cantidad:0},
					{id:23,precio:24000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"25X50",activo:true,cantidad:0},
					{id:24,precio:25000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X30",activo:true,cantidad:0},
					{id:25,precio:26000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"10X25",activo:true,cantidad:0},
					{id:26,precio:27000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X30",activo:true,cantidad:0},
					{id:27,precio:28000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE SOBRE POLI. CAL 40 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X10",activo:true,cantidad:0},
					{id:28,precio:29000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE SOBRE POLI. CAL 40 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X10",activo:true,cantidad:0},
					{id:29,precio:30000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:30,precio:31000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:31,precio:32000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:32,precio:33000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:33,precio:34000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:34,precio:35000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:35,precio:36000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:36,precio:37000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"50X20",activo:true,cantidad:0},
					{id:37,precio:38000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:38,precio:39000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:39,precio:40000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:40,precio:41000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"30X20",activo:true,cantidad:0},
					{id:41,precio:42000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20 x 10",activo:true,cantidad:0},
					{id:42,precio:43000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X30",activo:true,cantidad:0},
					{id:43,precio:44000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X30",activo:true,cantidad:0},
					{id:44,precio:45000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X20",activo:true,cantidad:0},
					{id:45,precio:46000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X30",activo:true,cantidad:0},
					{id:46,precio:47000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X20",activo:true,cantidad:0},
					{id:47,precio:48000,nombre:"IMP. DIGITAL EN VINILO LAMINADO MATE, SOBRE POLI. CAL 60 (4X0) CON 4 PUNTOS DE CINTA DOBLE FAZ DE ESPUMA",medidas:"20X20",activo:true,cantidad:0}
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
