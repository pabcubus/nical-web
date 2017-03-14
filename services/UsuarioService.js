(function() {
	'use strict';

	define(['moment'],
		function(moment) {
			var ngDependencies = ['lodash', '$q'];

			var UsuarioService = function(lodash, $q) {
				var vm = this;

				vm.usuarios = [
					{
						"usuario": "pbassil",
						"tienda": 333,
						"rol": {
							id: 1,
							nombre: 'admin'
						},
						"puede_hacer_pedidos_general": true,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "27-12-2014",
						"password": 1234,
						"apellido": "Bassil",
						"nombre": "Pablo",
						"id": "58c0de06319499742c8afdd4"
					},
					{
						"usuario": "yprice",
						"tienda": 347,
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": true,
						"puede_hacer_pedidos": true,
						"activo": false,
						"creacion": "31-05-2015",
						"password": 1234,
						"apellido": "Price",
						"nombre": "Yesenia",
						"id": "58c0de06ac1e03e3fe0007a1"
					},
					{
						"usuario": "cblanchard",
						"tienda": 333,
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "07-08-2014",
						"password": 1234,
						"apellido": "Blanchard",
						"nombre": "Charlotte",
						"id": "58c0de060a76c64d1b0d369b"
					},
					{
						"usuario": "vfranco",
						"tienda": 343,
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": false,
						"puede_hacer_pedidos": true,
						"activo": false,
						"creacion": "02-05-2014",
						"password": 1234,
						"apellido": "Franco",
						"nombre": "Villarreal",
						"id": "58c0de067449d2c258774aa7"
					},
					{
						"usuario": "thansen",
						"tienda": 341,
						"rol": {
							id: 2,
							nombre: 'operador'
						},
						"puede_hacer_pedidos_general": true,
						"puede_hacer_pedidos": true,
						"activo": true,
						"creacion": "06-03-2016",
						"password": 1234,
						"apellido": "Hansen",
						"nombre": "Tyson",
						"id": "58c0de0626f150ec6c420814"
					}
				];

				vm.guardarUsuario		= guardarUsuario;
				vm.actualizarUsuario	=	actualizarUsuario;
				vm.toggleActivo			= toggleActivo;
				vm.getUsuarios			= getUsuarios;
				vm.getUsuario			= getUsuario;

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

				function actualizarUsuario(usuario) {
					var deferred = $q.defer();

					var user = lodash.find(vm.usuarios, { id : usuario.id });
					if (lodash.isObject(user)) {
						vm.usuarios = lodash.filter(vm.usuarios, function(us) { return us.id !== user.id; });
						vm.usuarios.push(usuario);

						deferred.resolve();
					} else {
						deferred.reject({code: '01', message: 'Usuario no encontrado'});
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
