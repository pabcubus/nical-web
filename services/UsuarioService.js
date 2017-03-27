(function() {
	'use strict';

	define(['moment'],
		function(moment) {
			var ngDependencies = ['md5', 'lodash', '$q', 'DataService'];

			var UsuarioService = function(md5, lodash, $q, DataService) {
				var vm = this;

				vm.usuarios = [];

				vm.guardarUsuario = guardarUsuario;
				vm.actualizarUsuario = actualizarUsuario;
				vm.toggleActivo = toggleActivo;
				vm.getRoles = getRoles;
				vm.getUsuarios = getUsuarios;
				vm.getUsuario = getUsuario;

				function guardarUsuario(usuario) {
					var deferred = $q.defer();

					try {
						usuario.username = usuario.username.toLowerCase();
						usuario.nombre = lodash.capitalize(usuario.nombre);
						usuario.apellido = lodash.capitalize(usuario.apellido);
						usuario.password = md5.createHash('123');

						DataService.performOperation('/api/usuario', 'POST', usuario)
							.then(function(result){
								var res = result.data;

								deferred.resolve(res);
							})
							.catch(function(data){
								deferred.reject({
									code: data.status == -1 ? '02' : '01',
									message: data.message
								});
							});
					} catch (e) {
						deferred.reject({
							code: '01',
							message: 'Error. Intente mas tarde'
						});
					}

					return deferred.promise;
				}

				function actualizarUsuario(usuario) {
					var deferred = $q.defer();

					try {
						DataService.performOperation('/api/usuario', 'PUT', usuario)
							.then(function(result){
								var res = result.data;

								deferred.resolve(res);
							})
							.catch(function(data){
								deferred.reject({
									code: data.status == -1 ? '02' : '01',
									message: data.message
								});
							});
					} catch (e) {
						deferred.reject({
							code: '01',
							message: 'Error. Intente mas tarde'
						});
					}

					return deferred.promise;
				}

				function toggleActivo(usuario) {
					var newUser		= angular.copy(usuario);
					newUser.activo	= !newUser.activo;
					return actualizarUsuario(newUser);
				}

				function getRoles() {
					var deferred = $q.defer();

					DataService.performOperation('/api/rol', 'GET')
						.then(function(result){
							var roles = result.data;

							deferred.resolve(roles);
						})
						.catch(function(data){
							deferred.resolve([]);
						});

					return deferred.promise;
				}

				function getUsuarios() {
					var deferred = $q.defer();

					DataService.performOperation('/api/usuario', 'GET')
						.then(function(result){
							var users = result.data;

							deferred.resolve(users);
						})
						.catch(function(data){
							deferred.resolve([]);
						});

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
