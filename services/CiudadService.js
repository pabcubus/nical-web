(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash', '$q', 'DataService'];

			var CiudadService = function(lodash, $q, DataService) {
				var vm = this;

				vm.getCiudades			= getCiudades;

				function getCiudades(){
					var deferred = $q.defer();

					DataService.performOperation('/api/ciudad/', 'GET')
						.then(function(result){
							deferred.resolve(result.data);
						})
						.catch(function(){
							deferred.reject({});
						});

					return deferred.promise;
				}
			};

			CiudadService.$inject = ngDependencies;
			CiudadService.registeredName = 'CiudadService';
			return CiudadService;
		}
	);
})();
