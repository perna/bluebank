angular.module('bluebank')
	.controller('TransferController',['$scope','$localStorage','TransferService',
		function($scope, $localStorage,TransferService){

			$scope.$storage = $localStorage;
			$scope.userId = $scope.$storage.user;
			$scope.transfer = {};
			$scope.message ='';
			$scope.showMessage = false;
			$scope.typeMessage = false;

			$scope.doTransfer = function() {

				$scope.showMessage = false;
				$scope.typeMessage = false;

				if($scope.transferForm.$valid){

					var data = {
						emmiter: $scope.userId,
						agency: $scope.transfer.agency,
						account: $scope.transfer.account,
						value: $scope.transfer.value
					};


					var sendTransfer = TransferService.doTransfer(data);

					sendTransfer.then(function(data){
						$scope.message = data.data.message;
						$scope.showMessage = true;
						$scope.typeMessage = true;
					}).catch(function(err){
						$scope.message = err.data.message;
						$scope.showMessage = true;
						$scope.typeMessage = false;
					});
				}

			}
	}]);