angular.module('bluebank',['ngRoute'])
    .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                templateUrl: '/partials/account-details.html'
            })
            .when('/transfer', {
                templateUrl: '/partials/bank-transfer.html',
            })
            .when('/history', {
                templateUrl: '/partials/transaction-history.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);