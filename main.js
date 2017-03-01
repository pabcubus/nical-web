(function() {
	'use strict';

	require.config({
		paths: {
			// General dependencies
			'angular':					'bower_components/angular/angular.min',
			'jquery':					'bower_components/jquery/dist/jquery.min',
			'moment':					'bower_components/moment/min/moment.min',
			'ngLodash':					'bower_components/ng-lodash/build/ng-lodash.min',
			'uiRouter':					'node_modules/angular-ui-router/release/angular-ui-router.min',
			'angular-md5':				'bower_components/angular-md5/angular-md5.min',
			'bootstrap':				'bower_components/bootstrap/dist/js/bootstrap.min',
			'btdatetimepicker':			'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min'
		},

		shim: {
			'jquery':					{ exports: 'jquery'},
			'moment':					{ exports: 'moment' },
			'angular':					{ exports: 'angular', deps: ['jquery'] },
			'ngLodash':					{ exports: 'ngLodash', deps: ['angular'] },
			'uiRouter':					{ exports: 'uiRouter', deps: ['angular'] },
			'angular-md5':				{ exports: 'angular-md5', deps: ['angular'] },
			'bootstrap':				{ exports: 'bootstrap', deps: ['jquery'] },
			'btdatetimepicker':			{ exports: 'btdatetimepicker', deps: ['jquery', 'bootstrap', 'moment'] }
		},

		waitSeconds: 15,

		deps: [
			// kick start application... see bootstrap.js
			'setup/app.js'
		]
	});
})();
