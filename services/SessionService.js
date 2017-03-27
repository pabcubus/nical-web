(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['md5', 'lodash', '$q', 'HelperService', 'UsuarioService'];

			var SessionService = function(md5, lodash, $q, HelperService, UsuarioService) {
				var vm = this;

				vm.user = {};
				vm.logedIn = false;

				vm.login 			= login;
				vm.logout 			= logout;
				vm.init 			= init;
				vm.getUser 			= getUser;

				init();

				function login(usuario, password) {
					var deferred = $q.defer();

					UsuarioService.getUsuario(vm.user.usuario)
						.then(function(user){
							if (lodash.isObject(user)) {
								if (user.password == md5.createHash(password)) {
									if (user.activo) {
										HelperService.storage.set(HelperService.constants.LOCALSTORAGE_USER_TAG, user, true);
										vm.logedIn = true;
										vm.user = angular.copy(user);
										deferred.resolve(user);
									} else {
										deferred.reject({
											code: '01',
											message: 'Usuario inactivo'
										});
									}
								} else {
									deferred.reject({
										code: '01',
										message: 'Contraseña incorrecta'
									});
								}
							} else {
								deferred.reject({
									code: '01',
									message: 'Usuario no existente'
								});
							}
						})
						.catch(function(data){
							deferred.reject({
								code: data.code,
								message: data.message
							});
						});

					return deferred.promise;
				}

				function logout() {
					vm.user = {};
					vm.logedIn = false;

					HelperService.storage.remove(HelperService.constants.LOCALSTORAGE_USER_TAG);
				}

				function init() {
					var user = HelperService.storage.get(HelperService.constants.LOCALSTORAGE_USER_TAG, true);
					if (user) {
						vm.user = (user ? user : {});
						vm.logedIn = true;
					}
				}

				function getUser() {
					return vm.user;
				}
			};

			SessionService.$inject = ngDependencies;
			SessionService.registeredName = 'SessionService';
			return SessionService;
		}
	);
})();
