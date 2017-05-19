var app = angular.module('monitoringapp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '/assets/partials/loginpage.html' })
    .when('/login', { templateUrl: '/assets/partials/loginpage.html' })
    .otherwise({redirectTo: '/'})

});


var appinside = angular.module('monitoringapploggedin', ['ngRoute','angularUtils.directives.dirPagination','ngTable', 'ngTableResizableColumns']).config(function ($routeProvider) {
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

appinside.factory('dataFactory', ['$http', function($http) {


    var urlGetemployee = '/allEmployee/';
    var urlGetemployeeById = '/EmployeeById/';
    var urlGetneighbour = '/NeighboursLoad/';
    var urlGetneighbourById = '/neighbourById/';
    var dataFactory = {};

    dataFactory.Getemployee = function () {
        return $http.get(urlGetemployee);
    };
    dataFactory.GetemployeeById = function (id) {
        return $http.get(urlGetemployeeById+id);
    };
    dataFactory.Getneighbour = function () {
        return $http.get(urlGetneighbour);
    };
    dataFactory.GetneighbourById = function (id) {
        return $http.get(urlGetneighbourById+id);
    };

    return dataFactory;
}]);

appinside.factory('childFactory', ['$http', function($http) {


    var urlGetchild = '/allChildren/';
    var urlGetChildById = '/childById/';
    var childFactory = {};

    childFactory.Getchildren = function () {
        return $http.get(urlGetchild);
    };
    childFactory.GetChildById = function (id) {
        return $http.get(urlGetChildById+id);
    };

    return childFactory;
}]);


