angular.module('bluebank')
	.factory('HistoryService', ['$http', function($http){

			var url = '/api/history/';

			function getById(id) {
				return $http.get(url + id);
			}

			return{
				getById:getById
			};
	}]);
