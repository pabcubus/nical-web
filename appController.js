(function() {
	'use strict';

	define([],
		function() {
			var ngDependencies = ['$scope', '$rootScope', '$location', 'SessionService'];

			var AppController = function($scope, $rootScope, $location, SessionService){
				var vm				= this;

				vm.user				= {username: '', password: ''};
				vm.currentPath		= '';
				vm.logedIn			= false;
				vm.loginError		= {
					active: false,
					message: ''
				};

				vm.getCurrentState	= getCurrentState;
				vm.login			= login;
				vm.logout			= logout;

				$rootScope.$watch(
					function(){
						return $location.path();
					},
					function(){
						vm.currentPath = $location.path();
					}
				);

				$scope.$on('SET_NICAL_SESSION_DATA', function(event, args) {
					vm.user		= args.user;
					vm.logedIn	= args.logedIn;
					setLoginError(false, '');
				});

				function getCurrentState(state){
					return ($rootScope.$state.current.name.indexOf(state) != -1) ? true : false;
				}

				function login(){
					if(vm.user.username && vm.user.password){
						SessionService.login(vm.user.username, vm.user.password)
							.then(function(user){
								vm.user		= user;
								vm.logedIn 	= true;

								$location.path('/carrito');
								setLoginError(false, '');
							})
							.catch(function(data){
								setLoginError(true, data.message);
							});
					} else {
						setLoginError(true, 'Username and password is required');
					}
				}

				function logout(){
					SessionService.logout();

					vm.user		= {username: '', password: ''};
					vm.logedIn	= false;
					setLoginError(false, '');

					$location.path('/login');
				}

				function setLoginError(active, message){
					vm.loginError		= {
						'active': active,
						'message': message
					};
				}
			};

			AppController.$inject = ngDependencies;
			AppController.registeredName = 'AppController';
			return AppController;
		}
	);
})();
