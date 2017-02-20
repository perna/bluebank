angular.module('bluebank')
	.controller('HistoryController',['$scope','$routeParams', '$localStorage','HistoryService', 'moment',
		function($scope, $routeParams, $localStorage, HistoryService, moment){

			$scope.$storage = $localStorage;
			$scope.id_client = $scope.$storage.user;
			$scope.transactions = [];
			

			function showHistory() {

				var transactions = HistoryService.getById($scope.id_client);

				transactions.then(function(result){
					$scope.transactions = result.data;
				});

			}

			showHistory();
	}]);