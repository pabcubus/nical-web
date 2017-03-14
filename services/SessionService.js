(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$q', 'HelperService'];

			var SessionService = function(lodash, $q, HelperService) {
				var vm = this;

				vm.user = {};
				vm.logedIn = false;
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

				vm.login 			= login;
				vm.logout 			= logout;
				vm.init 			= init;
				vm.getUser 			= getUser;

				init();

				function login(usuario, password) {
					var deferred = $q.defer();

					var user = lodash.find(vm.usuarios, function(user) {
						return user.password == password && user.usuario == usuario;
					});

					if (lodash.isObject(user)) {
						HelperService.storage.set(HelperService.constants.LOCALSTORAGE_USER_TAG, user, true);
						vm.logedIn = true;
						vm.user = angular.copy(user);
						deferred.resolve(user);
					} else {
						deferred.reject({
							codigo: '01',
							message: 'Usuario no existente'
						});
					}

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
