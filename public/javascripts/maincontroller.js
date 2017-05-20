app.controller("MainController", function ($scope,$location,$http) {

    $scope.login = function () {
        $scope.dataLoading = true;
        $http.post('/signin/',{username:$scope.username,password:$scope.password} ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if(data =="ok") {
                window.location='/adminHome/';
            } else {
                $scope.error = 'Wrong username or password';
                $scope.dataLoading = false;
            }

        });

    };
    $scope.home=function(){
        window.location="/";
    }

});