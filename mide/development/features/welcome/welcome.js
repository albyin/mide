app.config(function($stateProvider){
	$stateProvider.state('welcome', {
		url : '/welcome',
		templateUrl : 'features/welcome/welcome.html',
		controller : 'WelcomeCtrl'
	});
});
app.controller('WelcomeCtrl', function($scope, $state, AuthService, $rootScope, GistFactory, $ionicPopup){
	//TODO: Splash page while you load resources (possible idea)
	//console.log('WelcomeCtrl');
	$scope.buttons = {
		login : 'login',
		signup : 'signup'
	};

	// ionic.Platform.ready(function(){
	// 	ionic.Platform.showStatusBar(false);
	// });

	$scope.login = function(){
		$state.go('login');
	};
	$scope.signup = function(){
		$state.go('signup');
	};

	var authReq = !false; //TODO: Toggle for using authentication work flow - require backend wired up

//<<<<<<< HEAD
	if (!authReq){
		$state.go('exercism.view'); //TODO: If Auth is not required, go directly here
	} else {
		if (AuthService.isAuthenticated()) {
			$rootScope.$broadcast('Auth');
			$scope.states.push({ //TODO: Need to add a parent controller to communicate
				name: 'Logout',
				ref: function () {
					AuthService.logout();
					$scope.data = {};
					$scope.states.pop(); //TODO: Find a better way to remove the Logout link, instead of pop
					$state.go('login');
				}
			});
//=======
			// if (!authReq){
			// 	$state.go('exercism.view');
			// } else {
			// 	if (AuthService.isAuthenticated()) {
			// 		$rootScope.$broadcast('Auth');
			// 		$scope.states.push({ //TODO: Need to add a parent controller to communicate
			// 			name: 'Logout',
			// 			ref: function(){
			// 				AuthService.logout();
			// 				$scope.data = {};
			// 				$scope.states.pop(); //TODO: Find a better way to remove the Logout link, instead of pop
			// 				$state.go('login');
			// 			}
			// 		});
//>>>>>>> development

			// 		//pop-up options, view shared code or
			// 		//TODO: Happen on Login, recieve gist notification
			// 		GistFactory.queuedGists().then(gistsRx);

//<<<<<<< HEAD
			function gistsRx(response) {
				console.log(response.data.gists);
				if (response.data.gists.length !== 0) {
					//console.log('notify user of Rx gists')
					showConfirm = function () {
						var confirmPopup = $ionicPopup.confirm({
							title: 'You got Code!',
							template: 'Your friends shared some code, do you want to take a look?'
						});
						//TODO: Custom PopUp Instead
						//TODO: You need to account for login (this only accounts for user loading app, already logged in)
						confirmPopup.then(function (res) {
							if (res) {
								//console.log('You are sure');
								$state.go('friends');
							} else {
								//console.log('You are not sure');
								$state.go('exercism.compile');
							}
						});
					};
//=======
					// 		function gistsRx(response){
					// 			console.log(response.data.gists);
					// 			if(response.data.gists.length !==0){
					// 				//console.log('notify user of Rx gists')
					// 				showConfirm = function() {
					// 					var confirmPopup = $ionicPopup.confirm({
					// 						title: 'You got Code!',
					// 						template: 'Your friends shared some code, do you want to take a look?'
					// 					});
					// 					//TODO: Custom PopUp Instead
					// 					//TODO: You need to account for login (this only accounts for user loading app, already logged in)
					// 					confirmPopup.then(function(res) {
					// 						if(res) {
					// 							//console.log('You are sure');
					// 							$state.go('chats');
					// 						} else {
					// 							//console.log('You are not sure');
					// 							$state.go('exercism.compile');
					// 						}
					// 					});
					// 				};
//>>>>>>> development

					// 				showConfirm();
					// 			} else {
					// 				$state.go('exercism.compile');
					// 			}
					// 		}


//<<<<<<< HEAD
				} else {
					//TODO: $state.go('signup'); Remove Below line
					//$state.go('signup');
					//DO
				}
			}
		}
	}
//=======
//	// 	} else {
//	// 		//TODO: $state.go('signup'); Remove Below line
//	// 		$state.go('signup');
//	// 	}
//	// }
//>>>>>>> development
});