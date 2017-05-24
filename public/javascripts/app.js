var app = angular.module('spareApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '/' })
    .otherwise({redirectTo: '/'})

});
var appinside = angular.module('spareApploggedin', ['ngRoute','angularUtils.directives.dirPagination','ngTable', 'ngTableResizableColumns']).config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '/assets/partials/dashboad.html' })
    .when('/registeremployee', { templateUrl: '/viewEmployee/' })
    .when('/children', { templateUrl: '/assets/partials/children.html' })
    .when('/childrenInfo/:id', { templateUrl:function(params){return'/childInfo/'+params.id }})
    .when('/ChildRegistration', { templateUrl: '/newChildRegistration/' })
    .when('/allParent', { templateUrl: '/allParents/' })
    .when('/allneighbour', { templateUrl: '/allNeighbours/' })
    .when('/listConsult', { templateUrl: '/listConsultation/' })
});




