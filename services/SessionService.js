(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$q', 'HelperService'];

			var SessionService = function(lodash, $q, HelperService) {
				var vm = this;

				vm.user = {};
				vm.logedIn = false;
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
						"usuario": "jwilliam",
						"tienda": 344,
						"puede_hacer_pedidos_general": true,
						"puede_hacer_pedidos": true,
						"activo": false,
						"creacion": "15-07-2014",
						"password": 1234,
						"apellido": "William",
						"nombre": "Jarvis",
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

				vm.login = login;
				vm.logout = logout;
				vm.init = init;
				vm.getUser = getUser;

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
