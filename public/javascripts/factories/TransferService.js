angular.module('bluebank')
	.factory('TransferService', ['$http', function($http){

			var url = '/api/accounts/transfer';

			function doTransfer(data) {
				return $http.post(url, data)
			}

			return{
				doTransfer:doTransfer
			};
	}]);
