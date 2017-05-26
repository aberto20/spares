app.controller("MainController", function ($scope,$location,$http) {
    if($scope.new==false){
        $scope.displaydata='Add a new user'
    }else {
        $scope.displaydata='Show list users';
    }
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
    $scope.loadSerie = function () {
        $http.get('/loadSeries/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));

            $scope.series=data;

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
    $scope.loadSparePart=function () {
        $http.get('/loadSparePart/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.spareParts=data;

        });
    };
    $scope.loadSparePartType=function () {
        $http.get('/loadPartType/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.loadSparePartTypes=data;

        });
    };
    $scope.saveSparePart=function () {
        $scope.dataLoading = true;
        $http.post('/saveSparePart/',$scope.newPartNameInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='partNameExists'){
                alert('Entered spare part name exist !');
                return;
            }

            $scope.spareParts=data;
            $scope.new=false;
            $scope.newPartNameInfo=[];
            $scope.dataLoading = false;

        });
    };
    $scope.updateSparePart=function (sparePart) {
        $scope.dataLoading = true;
        $http.post('/updateSparePart/',sparePart).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.spareParts=data;
            for(var d in data){
                if(data[d].id == vehicle.id){
                    data[d].edit = false;
                }
            }
            $scope.dataLoading = false;


        });
    };
    $scope.disableSparePart=function (sparePart) {
        if(confirm("do you real want to delete "+sparePart.partName + "?")) {
            $http.post('/deleteSparePart/' + sparePart.id, sparePart).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));

                $scope.spareParts = data;
                data.edit = false;
                window.location="/sparePart/";


            });
        }
    };
    $scope.saveSeries = function () {
        $scope.dataLoading = true;
        $http.post('/saveSeries/',$scope.newVehicleInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='seriesExists'){
                alert('Ethered Serie name exist !');
                return;
            }

            $scope.series=data;
            $scope.new=false;
            $scope.newVehicleInfo=[];
            $scope.dataLoading = false;

        });

    };
    $scope.updateSeries = function (series) {
        $scope.dataLoading = true;
        $http.post('/updateSeries/',series).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.series=data;
            for(var d in data){
                if(data[d].id == series.id){
                    data[d].edit = false;
                }
            }
            $scope.dataLoading = false;


        });

    };
    $scope.disableSeries=function (series) {
        if(confirm("do you real want to delete "+series.serieName + "?")) {
            $http.post('/deleteSeries/' + series.id, series).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));

                $scope.series = data;
                data.edit = false;
                window.location="/SeriesPage/";


            });
        }
    };
    $scope.savePartType = function () {
        $scope.dataLoading = true;
        $http.post('/savePartType/',$scope.newVehicleInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='partTypeExists'){
                alert('Entered part type  exist !');
                return;
            }

            $scope.loadSparePartTypes=data;
            $scope.new=false;
            $scope.newVehicleInfo=[];
            $scope.dataLoading = false;

        });

    };
    $scope.updatePartType = function (part) {
        $scope.dataLoading = true;
        $http.post('/updatePartType/',part).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.loadSparePartTypes=data;
            for(var d in data){
                if(data[d].id == part.id){
                    data[d].edit = false;
                }
            }
            $scope.dataLoading = false;


        });

    };
    $scope.disablePartType=function (partType) {
        if(confirm("do you real want to delete "+partType.typeName + "?")) {
            $http.post('/deletePartType/' + partType.id, partType).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));

                $scope.loadSparePartTypes = data;
                data.edit = false;
                window.location="/partTypePage/";


            });
        }
    };

});