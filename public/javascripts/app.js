angular.module('bluebank',['ngRoute','angularMoment'])
    .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/user/:id', {
                templateUrl: '/partials/account-details.html',
                controller: 'AccountController'
            })
            .when('/transfer', {
                templateUrl: '/partials/bank-transfer.html',
            })
            .when('/history', {
                templateUrl: '/partials/transaction-history.html',
            })
            .otherwise({
                redirectTo: '/:id'
            });
    }])
    .run(function(amMoment) {
        amMoment.changeLocale('pt-br');
    });