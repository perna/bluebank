angular.module('bluebank')
	.controller('AccountController',['$scope','$routeParams', '$localStorage','$sessionStorage','ClientService', 'moment',
		function($scope, $routeParams, $localStorage, $sessionStorage, ClientService, moment){

			$scope.id_client = $routeParams.id;
			$scope.accountNumber = '';
			$scope.accountBalance = '';
			$scope.accountDate = '';
			$scope.$storage = $localStorage;

			function showAccount() {

				var user = ClientService.getById($scope.id_client);

				user.then(function(result){
					$scope.$storage.user = $scope.id_client;
					$scope.$storage.account_number = result.data.Accounts[0].number;
					$scope.accountNumber = result.data.Accounts[0].number;
					$scope.accountBalance = result.data.Accounts[0].balance;
					$scope.accountDate = result.data.created_at;

				});

			}

			showAccount();
	}]);