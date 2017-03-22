(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$q', '$http'];

			var DataService = function($q, $http) {
				var vm = this;

				vm.performOperation = performOperation;

				function performOperation(url, operation, data) {
					var deferred = $q.defer();

					var httpData = {
						'method': operation,
						'url': 'http://localhost:3210' + url,
						'data': (data ? data : {})
					};

					$http(httpData)
						.then(
							function successCallback(response) {
								deferred.resolve(response);
							}, function errorCallback(response) {
								deferred.reject({status: response.status});
							}
						);

					return deferred.promise;
				}
			};

			DataService.$inject = ngDependencies;
			DataService.registeredName = 'DataService';
			return DataService;
		}
	);
})();
