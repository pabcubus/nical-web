(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['lodash'];

			var HelperService = function(lodash) {
				var vm = this;

				vm.constants = {
					LOCALSTORAGE_USER_TAG: 'nical-user'
				};

				vm.storage = {
					/**
					 * Sets a key/value pair to localStorage
					 * @public
					 * @memberof src.esr-app.shared.services.HelperService
					 * @param {String} key the key to use
					 * @param {String} value the value to set
					 * @return {undefined}
					 */
					set: function(key, value, stringify) {
						localStorage.setItem(key, (stringify ? JSON.stringify(value) : value));
					},

					/**
					 * Gets an object form localstorage
					 * @public
					 * @memberof src.esr-app.shared.services.HelperService
					 * @param {String} key the key to get
					 * @returns {Object} the object retrieved
					 */
					get: function(key, parse) {
						var value = (parse ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key));
						return value;
					},

					/**
					 * Removes an object form localstorage
					 * @public
					 * @memberof src.esr-app.shared.services.HelperService
					 * @param {String} key the key to remove
					 * @returns {Object} the object retrieved
					 */
					remove: function(key) {
						return localStorage.removeItem(key);
					}
				};

				vm.string = {
					checkStringRegex: function(str, regex){
						return regex.test(str);
					}
				};
			};

			HelperService.$inject = ngDependencies;
			HelperService.registeredName = 'HelperService';
			return HelperService;
		}
	);
})();
