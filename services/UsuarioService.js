(function() {
	'use strict';

	define(['moment'],
		function(moment) {
			var ngDependencies = ['lodash', '$q'];

			var UsuarioService = function(lodash, $q) {
				var vm = this;

				vm.usuarios = [{
						"usuario": "pbassil",
						"tienda": 334,
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "23-03-2014",
						"password": 1234,
						"apellido": "Bassil",
						"nombre": "Pablo",
						"_id": "58b73bf7938b8fe78f141b42"
					},
					{
						"usuario": "cbassil",
						"tienda": 344,
						"puede_hacer_pedidos_general": true,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "15-07-2014",
						"password": 1234,
						"apellido": "Bassil",
						"nombre": "Camilo",
						"_id": "58b73bf7074df861fec109b9"
					},
					{
						"usuario": "lmaddox",
						"tienda": 346,
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "27-06-2014",
						"password": 1234,
						"apellido": "Maddox",
						"nombre": "Lang",
						"_id": "58b73bf7ca452db75131b345"
					},
					{
						"usuario": "wyork",
						"tienda": 344,
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "30-09-2016",
						"password": 1234,
						"apellido": "York",
						"nombre": "Watkins",
						"_id": "58b73bf7dd27279db0ff6118"
					},
					{
						"usuario": "gayala",
						"tienda": 333,
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "06-10-2015",
						"password": 1234,
						"apellido": "Ayala",
						"nombre": "Georgia",
						"_id": "58b73bf78e2a3c16323da2c0"
					}
				];

				vm.guardarUsuario = guardarUsuario;
				vm.getUsuarios = getUsuarios;
				vm.getUsuario = getUsuario;

				function guardarUsuario(usuario) {
					var deferred = $q.defer();

					try {
						usuario.usuario = lodash.lowerCase(usuario.usuario);
						usuario.nombre = lodash.capitalize(usuario.nombre);
						usuario.apellido = lodash.capitalize(usuario.apellido);
						usuario.password = '1234';
						usuario.creacion = moment().format('DD-MM-YYYY');
						usuario.id = new Date().getTime();

						vm.usuarios.push(usuario);

						deferred.resolve(true);
					} catch (e) {
						deferred.reject();
					}

					return deferred.promise;
				}

				function getUsuarios() {
					var deferred = $q.defer();

					deferred.resolve(vm.usuarios);

					return deferred.promise;
				}

				function getUsuario(usuario, password) {
					var deferred = $q.defer();

					var user = lodash.find(vm.usuarios, function(user) {
						return user.password == password && user.usuario == usuario;
					});

					if (lodash.isObject(user)) {
						deferred.resolve(user);
					} else {
						deferred.reject({
							codigo: '01',
							message: 'Usuario no existente'
						});
					}

					return deferred.promise;
				}
			};

			UsuarioService.$inject = ngDependencies;
			UsuarioService.registeredName = 'UsuarioService';
			return UsuarioService;
		}
	);
})();
