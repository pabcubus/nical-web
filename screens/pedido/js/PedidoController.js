(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', 'lodash', 'PedidoService'];

			var PedidoController = function($scope, lodash, PedidoService) {
				var vm = this;

				vm.searchString	= '';
				vm.pedidos		= [];

				vm.toggleActivo	= toggleActivo;

				function init(){
					PedidoService.getPedidos()
						.then(function(pedidos){
							vm.pedidos = pedidos;
						});

					$('.datetimepicker').datetimepicker({
						format: 'DD/MM/YYYY'
					});
				}

				function toggleActivo(pedido) {
					PedidoService.toggleActivo(pedido);
					PedidoService.getPedidos()
						.then(function(pedidos){
							vm.pedidos = pedidos;
						});
				}

				$scope.$on('$viewContentLoaded', function(){
					init();
				});
			};

			PedidoController.$inject = ngDependencies;
			PedidoController.registeredName = 'PedidoController';
			return PedidoController;
		}
	);
})();
