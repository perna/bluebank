angular.module('bluebank')
	.controller('AccountController',['$scope','$routeParams', 'ClientService', 'moment',
		function($scope, $routeParams, ClientService, moment){

			$scope.id_client = $routeParams.id;
			$scope.accountNumber = '';
			$scope.accountBalance = '';
			$scope.accountDate = '';

			function showAccount() {

				var user = ClientService.getById($scope.id_client);

				user.then(function(result){
					$scope.accountNumber = result.data.Accounts[0].number;
					$scope.accountBalance = result.data.Accounts[0].balance;
					$scope.accountDate = result.data.created_at;

				});

			}

			showAccount();
	}]);