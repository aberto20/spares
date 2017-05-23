app.controller("MainController", function ($scope,$location,$http) {

    $scope.saveUser = function () {
        $scope.dataLoading = true;
        $http.post('/saveUser/',$scope.newUserInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='usernameExist'){
                alert('Ethered username exist !');
                return;
            }
            if (data=='phoneExist'){
                alert('Ethered phone exist !');
                return;
            }
            if (data=='emailExist'){
                alert('Ethered email exist !');
                return;
            }
            $scope.users=data;
            $scope.new=false;
            $scope.newUserInfo=[];
            $scope.dataLoading = false;

        });

    };
    $scope.updateUser = function (user) {
        $scope.dataLoading = true;
        $http.post('/updateUser/',user).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='error'){
                alert('User not updated there is an error');
                $scope.dataLoading = false;
                return;
            }
            $scope.users=data;
            for(var d in data){
                if(data[d].id == user.id){
                    data[d].edit = false;
                }
            }
            $scope.dataLoading = false;


        });

    };
    $scope.disableUser=function (user) {
        if(confirm("do you real want to deactivate "+user.firstName +" "+user.lastName+"?")) {
            $http.post('/disableUser/' + user.id, user).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));

                $scope.users = data;
                data.edit = false;
                window.location="/user/";


            });
        }
    };
    $scope.saveBland = function () {
        $scope.dataLoading = true;
        $http.post('/save/bland/',$scope.newBlandInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='blandNameExist'){
                alert('Ethered bland name exist !');
                return;
            }

            $scope.blands=data;
            $scope.new=false;
            $scope.newBlandInfo=[];
            $scope.dataLoading = false;

        });

    };
    $scope.updateBland = function (bland) {
        $scope.dataLoading = true;
        $http.post('/update/bland/',bland).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.blands=data;
            for(var d in data){
                if(data[d].id == bland.id){
                    data[d].edit = false;
                }
            }
            $scope.dataLoading = false;


        });

    };
    $scope.disableBland=function (bland) {
        if(confirm("do you real want to delete "+bland.blandName + "?")) {
            $http.post('/delete/bland/' + bland.id, bland).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));

                $scope.blands = data;
                data.edit = false;
                window.location="/blandPage/";


            });
        }
    };
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
    $scope.loadCurrentUser = function () {
        $http.get('/loadCurrentUser/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.currentUser=data;

        });

    };
    $scope.loadVehicle = function () {
        $http.get('/list/vehicle/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));

            $scope.vehicles=data;

        });

    };
    $scope.loadUser = function () {
        $http.get('/loadUsers/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.users=data;

        });

    };
    $scope.loadBlands = function () {
        $http.get('/list/bland/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.blands=data;

        });

    };
    $scope.home=function(){
        window.location="/";
    }
    $scope.saveVehicle = function () {
        $scope.dataLoading = true;
        $http.post('/save/vehicle/',$scope.newVehicleInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='vehicleNameExists'){
                alert('Ethered vehicle name exist !');
                return;
            }

            $scope.vehicles=data;
            $scope.new=false;
            $scope.newVehicleInfo=[];
            $scope.dataLoading = false;

        });

    };
    $scope.updateVehicle = function (vehicle) {
        $scope.dataLoading = true;
        $http.post('/update/vehicle/',vehicle).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.vehicles=data;
            for(var d in data){
                if(data[d].id == vehicle.id){
                    data[d].edit = false;
                }
            }
            $scope.dataLoading = false;


        });

    };
    $scope.disableVehicle=function (vehicle) {
        if(confirm("do you real want to delete "+vehicle.vehicleName + "?")) {
            $http.post('/delete/vehicle/' + vehicle.id, vehicle).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));

                $scope.vehicles = data;
                data.edit = false;
                window.location="/VehiclePage/";


            });
        }
    };

});