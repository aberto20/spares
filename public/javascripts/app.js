var app = angular.module('spareApp', ['ngRoute','angularUtils.directives.dirPagination']).config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '/' })
    .otherwise({redirectTo: '/'})

});





