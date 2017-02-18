angular.module('bluebank',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: '/partials/account-details.html'
            })
            .when('/search', {
                templateUrl: 'static/partials/search.html',
                controller: 'SearchController'
            })
            .when('/add-podcast', {
                templateUrl: 'static/partials/add_feed.html',
                controller: 'FeedController'
            })
            .when('/list-podcasts', {
                templateUrl: 'static/partials/list_podcasts.html',
                controller: 'PodcastController'
            })
            .when('/about', {
                templateUrl: 'static/partials/about.html'
            })
            .when('/contact', {
                templateUrl: 'static/partials/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);