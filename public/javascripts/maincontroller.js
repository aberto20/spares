app.controller("MainController", function ($scope,$location,$http) {
    if($scope.new==false){
        $scope.displaydata='Add a new user'
    }else {
        $scope.displaydata='Show list users';
    }
    $scope.selectVehicle = function (id) {
        $http.get('/vehicleByBland/'+id).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));


            $scope.vehicleType=data;
            for(var d in data){
                if(data[d].id == id){
                    $scope.getvehicleIndex= data[d];
                }
            }
            $scope.showVehile=true;
            $scope.showBland=false;
            $scope.showSerie=false;
            $scope.showParttype=false;
            $scope.showSparepart=false;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.showVehilePage=function(){
        $scope.showVehile=true;
        $scope.showBland=false;
        $scope.showSerie=false;
        $scope.showParttype=false;
        $scope.showSparepart=false;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.showBlandPage=function(){
        $scope.showVehile=false;
        $scope.showBland=true;
        $scope.showSerie=false;
        $scope.showParttype=false;
        $scope.showSparepart=false;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.showSeriePage=function(){
        $scope.showVehile=false;
        $scope.showBland=false;
        $scope.showSerie=true;
        $scope.showParttype=false;
        $scope.showSparepart=false;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.showParttypePage=function(){
        $scope.showBland=false;
        $scope.showVehile=false;
        $scope.showSerie=false;
        $scope.showParttype=true;
        $scope.showSparepart=false;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.showsparepartyPage=function(){
        $scope.showVehile=false;
        $scope.showBland=false;
        $scope.showSerie=false;
        $scope.showParttype=false;
        $scope.showSparepart=true;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.selectSeries = function (id) {
        $http.get('/vehicleBySerie/'+id).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            for(var d in data){
                if(data[d].id == id){
                    $scope.getSerieIndex= data[d];
                }
            }
            $scope.seriesType=data;
            $scope.showVehile=false;
            $scope.showBland=false;
            $scope.showSerie=true;
            $scope.showParttype=false;
            $scope.showSparepart=false;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.selectParttype = function (id) {
        $http.get('/vehicleByPartType/'+id).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            for(var d in data){
                if(data[d].id == id){
                    $scope.getParttypeIndex= data[d];
                }
            }
            $scope.sparepartTypes=data;
            $scope.showBland=false;
            $scope.showVehile=false;
            $scope.showSerie=false;
            $scope.showParttype=true;
            $scope.showSparepart=false;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.searchpartModel = function (model) {
        if (model==""){
            alert('Serie number required !');
            return;
        }
        $http.get('/findByPartModel/'+model).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if(data!=""){
                $scope.getSparePartIndex=data;
                $scope.showBland=false;
                $scope.showVehile=false;
                $scope.showSerie=false;
                $scope.showSearch=true;
                $scope.showParttype=false;
                $scope.showSparepart=false;
                $scope.showsearchDetails=true;
                $scope.showSparepartDetails=false;
            }


        });

    };
    $scope.selectspareparty = function (id) {
        $http.get('/vehicleBySparePart/'+id).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            for(var d in data){
                if(data[d].id == id){
                    $scope.getSparePartIndex= data[d];
                }
            }
            $scope.sparepartss=data;
            $scope.showVehile=false;
            $scope.showBland=false;
            $scope.showSerie=false;
            $scope.showParttype=false;
            $scope.showSparepart=true;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.selectsparepartyDetails = function (id) {
        $http.get('/loadCurrentUser/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));

            $scope.sparepartDetail=data;
            $scope.showVehile=false;
            $scope.showBland=false;
            $scope.showSerie=false;
            $scope.showParttype=false;
            $scope.showSparepart=false;
            $scope.showSparepartDetails=true;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.uploadPhoto = function(files) {
        $scope.btnSubmit=false;
        var fd = new FormData();
        //Take the first selected file
        fd.append("photo", files[0]);

        //alert("Uploading");

        $http.post("/uploadImage/", fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function (data, status, headers, config) {
            if(data!='Error'){
                $scope.getphoto = data;
                // alert(JSON.stringify($scope.trainee));
                $scope.msgcv={class:"alert alert-success",message:"Uploaded successfully"};
                $scope.btnSubmit=true;
            }

        });
    };
    $scope.saveUser = function () {
        $scope.dataLoading = true;
        $scope.newUserInfo.photo=$scope.getphoto;
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
            $scope.newUserInfo="";
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
        $scope.newBlandInfo.image=$scope.getphoto;
        $http.post('/save/bland/',$scope.newBlandInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='blandNameExist'){
                alert('Entered bland name exist !');
                return;
            }

            $scope.blands=data;
            $scope.new=false;
            $scope.dataLoading = false;

        });

    };
    $scope.saveSeries = function(){
     $scope.dataLoading = true;
        $http.post('/save/series/', $scope.newSeriesInfo ).success(function (data, status, header, config){
            if(data == 'seriesExists'){
                alert('The inserted series already exist');
                return;
            }
            $scope.series=data;
            $scope.new=false;
            $scope.newSeriesInfo=[];
            $scope.dataLoading=false;
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
            $scope.showBland=true;

        });

    };
    $scope.home=function(){
        window.location="/";
    };
    $scope.saveVehicle = function () {
        $scope.dataLoading = true;
        $scope.newVehicleInfo.image=$scope.getphoto;
        $http.post('/save/vehicle/',$scope.newVehicleInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='vehicleNameExists'){
                alert('Ethered vehicle name exist !');
                return;
            }
            $scope.vehicles=data;
            $scope.new=false;
            $scope.newVehicleInfo="";
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
        $scope.newPartNameInfo.image=$scope.getphoto;
        $http.post('/saveSparePart/',$scope.newPartNameInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='partNameExists'){
                alert('Entered spare part name exist !');
                return;
            }

            $scope.spareParts=data;
            $scope.new=false;
            $scope.newPartNameInfo="";
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
            $scope.newVehicleInfo="";
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
        $scope.newVehicleInfo.image=$scope.getphoto;
        $http.post('/savePartType/',$scope.newVehicleInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=='partTypeExists'){
                alert('Entered part type  exist !');
                return;
            }

            $scope.loadSparePartTypes=data;
            $scope.new=false;
            $scope.newVehicleInfo="";
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