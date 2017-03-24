module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'styles/shared.css': 'styles/shared.scss',
					'styles/login.css': 'styles/login.scss',
					'styles/carrito.css': 'styles/carrito.scss',
					'styles/productos.css': 'styles/productos.scss',
					'styles/pedidos.css': 'styles/pedidos.scss',
					'styles/toolbar.css': 'styles/toolbar.scss'
				}
			}
		},
		shell: {
			serve: {
				command: 'serve'
			},
			serve_prod: {
				command: 'serve -p 80'
			}
		},
		watch: {
			sass: {
				files: ['**/*.scss'],
				tasks: ['sass']
			}
		},
		concurrent: {
			serve: ['shell:serve', 'watch:sass'],
			serve_prod: ['shell:serve_prod', 'watch:sass']
		}
	});


	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('serve', [
		'sass',
		'concurrent:serve'
	]);

	grunt.registerTask('serve_prod', [
		'sass',
		'concurrent:serve_prod'
	]);
};
