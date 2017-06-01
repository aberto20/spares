var app = angular.module('spareApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '/' })
    .otherwise({redirectTo: '/'})

});





