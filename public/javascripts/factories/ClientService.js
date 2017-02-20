angular.module('bluebank')
	.factory('ClientService', ['$http', function($http){

			var url = '/api/clients/';

			function getById(id) {
				return $http.get(url + id)
			}

			return{
				getById:getById
			};
	}]);

