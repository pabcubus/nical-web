(function() {
	'use strict';

	define(['moment'],
		function(moment) {
			var ngDependencies = ['lodash', '$q', 'DataService'];

			var UsuarioService = function(lodash, $q, DataService) {
				var vm = this;

				vm.usuarios = [{
						"email": "pbassil@somedomain.com",
						"usuario": "pbassil",
						"tienda": "345",
						"rol": {
							id: 1,
							nombre: 'administrador'
						},
						"puede_hacer_pedidos_general": true,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "02-07-2016",
						"password": "1234",
						"apellido": "Bassil",
						"nombre": "Pablo",
						"id": 1
					},
					{
						"email": "mhicks@somedomain.com",
						"usuario": "mhicks",
						"tienda": "344",
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "18-05-2016",
						"password": "1234",
						"apellido": "Hicks",
						"nombre": "Mindy",
						"id": 2
					},
					{
						"email": "rvalenzuela@somedomain.com",
						"usuario": "rvalenzuela",
						"tienda": "337",
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "11-02-2016",
						"password": "1234",
						"apellido": "Valenzuela",
						"nombre": "Rebecca",
						"id": 3
					},
					{
						"email": "oarnold@somedomain.com",
						"usuario": "oarnold",
						"tienda": "344",
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "01-08-2016",
						"password": "1234",
						"apellido": "Arnold",
						"nombre": "Ola",
						"id": 4
					},
					{
						"email": "pslater@somedomain.com",
						"usuario": "pslater",
						"tienda": "336",
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "17-07-2014",
						"password": "1234",
						"apellido": "Slater",
						"nombre": "Pugh",
						"id": 5
					}
				];

				vm.guardarUsuario = guardarUsuario;
				vm.actualizarUsuario = actualizarUsuario;
				vm.toggleActivo = toggleActivo;
				vm.getUsuarios = getUsuarios;
				vm.getUsuario = getUsuario;

				function guardarUsuario(usuario) {
					var deferred = $q.defer();

					try {
						usuario.usuario = usuario.usuario.toLowerCase();
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

				function actualizarUsuario(usuario) {
					var deferred = $q.defer();

					var user = lodash.find(vm.usuarios, {
						id: usuario.id
					});
					if (lodash.isObject(user)) {
						vm.usuarios = lodash.filter(vm.usuarios, function(us) {
							return us.id !== user.id;
						});
						vm.usuarios.push(usuario);

						deferred.resolve();
					} else {
						deferred.reject({
							code: '01',
							message: 'Usuario no encontrado'
						});
					}

					return deferred.promise;
				}

				function toggleActivo(usuario) {
					usuario.activo = !usuario.activo;
				}

				function getUsuarios() {
					var deferred = $q.defer();

					deferred.resolve(vm.usuarios);

					return deferred.promise;
				}

				function getUsuario(usuario, password) {
					var deferred = $q.defer();

					DataService.performOperation('/api/usuario/' + usuario, 'GET')
						.then(function(result){
							var user = result.data;

							deferred.resolve(user);
						})
						.catch(function(data){
							deferred.reject({
								code: data.status == -1 ? '02' : '01',
								message: data.message
							});
						});

					return deferred.promise;
				}
			};

			UsuarioService.$inject = ngDependencies;
			UsuarioService.registeredName = 'UsuarioService';
			return UsuarioService;
		}
	);
})();
