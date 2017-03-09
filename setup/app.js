(function() {
	'use strict';
	require([
				'angular',
				'uiRouter',
				'jquery',
				'moment',
				'ngLodash',
				'angular-md5',
				'bootstrap',
				'btdatetimepicker',

				// Services
				'../Services/HelperService',
				'../Services/SessionService',
				'../Services/UsuarioService',
				'../Services/TiendaService',
				'../Services/ProductoService',
				'../Services/PedidoService',

				// Controllers
				'../AppController',
				'../screens/carrito/js/CarritoController',
				'../screens/producto/js/ProductoController',
				'../screens/usuario/js/UsuarioController',
				'../screens/tienda/js/TiendaController',
				'../screens/pedido/js/PedidoController'
			],
			function(
				ng,
				uiRouter,
				jquery,
				moment,
				ngLodash,
				angularmd5,
				bootstrap,
				btdatetimepicker,

				// Services
				HelperService,
				SessionService,
				UsuarioService,
				TiendaService,
				ProductoService,
				PedidoService,

				// Controllers
				AppController,
				CarritoController,
				ProductoController,
				UsuarioController,
				TiendaController,
				PedidoController
			) {
				ng.module('nical', ['ui.router', 'angular-md5', 'ngLodash'])

					// Services
					.service(HelperService.registeredName, HelperService)
					.service(SessionService.registeredName, SessionService)
					.service(UsuarioService.registeredName, UsuarioService)
					.service(TiendaService.registeredName, TiendaService)
					.service(ProductoService.registeredName, ProductoService)
					.service(PedidoService.registeredName, PedidoService)

					// Controllers
					.controller(AppController.registeredName, AppController)
					.controller(CarritoController.registeredName, CarritoController)
					.controller(ProductoController.registeredName, ProductoController)
					.controller(UsuarioController.registeredName, UsuarioController)
					.controller(TiendaController.registeredName, TiendaController)
					.controller(PedidoController.registeredName, PedidoController)

					.run(
						function($rootScope, $location, SessionService, HelperService) {
							$rootScope.$on('$locationChangeSuccess', function(event, next, current) {
								if (SessionService.logedIn) {
									var path	= $location.path();
									var valid	= HelperService.string.checkStringRegex(path, /^(\/(\w|\?|\&)+)+$/i);
									var url		= valid && (path != '/login') ? path : '/carrito';

									$location.path( url );
								} else {
									$location.path('/login');
								}

								$rootScope.$broadcast('SET_NICAL_SESSION_DATA', {
									'user':		SessionService.user,
									'logedIn':	SessionService.logedIn
								});
							});
						}
					)
					.config(
						function($urlRouterProvider, $stateProvider) {
							$urlRouterProvider.otherwise('/carrito');
							$stateProvider
								.state('login', {
									url: '/login',
									templateUrl: 'screens/login/html/login.html'
								})
								.state('carrito', {
									url: '/carrito',
									templateUrl: 'screens/carrito/html/carrito.html',
									controller: 'CarritoController',
									controllerAs: 'cc'
								})
								.state('producto', {
									url: '/producto',
									templateUrl: 'screens/producto/html/producto.html',
									controller: 'ProductoController',
									controllerAs: 'pc'
								})
								.state('usuario', {
									url: '/usuario',
									templateUrl: 'screens/usuario/html/usuario.html',
									controller: 'UsuarioController',
									controllerAs: 'uc'
								})
								.state('tienda', {
									url: '/tienda',
									templateUrl: 'screens/tienda/html/tienda.html',
									controller: 'TiendaController',
									controllerAs: 'tc'
								})
								.state('pedido', {
									url: '/pedido',
									templateUrl: 'screens/pedido/html/pedido.html',
									controller: 'PedidoController',
									controllerAs: 'pec'
								});
						}
					);

				ng.bootstrap(document, ['nical']);
			}
		);
})();
