angular.module('bluebank',['ngRoute','angularMoment','ngStorage'])
    .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/user/:id', {
                templateUrl: '/partials/account-details.html',
                controller: 'AccountController'
            })
            .when('/transfer', {
                templateUrl: '/partials/bank-transfer.html',
                controller: 'TransferController'
            })
            .when('/history', {
                templateUrl: '/partials/transaction-history.html',
                controller: 'HistoryController'
            })
            .otherwise({
                redirectTo: '/:id'
            });
    }])
    .run(function(amMoment) {
        amMoment.changeLocale('pt-br');
    });