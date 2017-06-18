app.controller("MainController", function ($scope,$location,$http) {
    if($scope.new==false){
        $scope.displaydata='Add a new user'
    }else {
        $scope.displaydata='Show list users';
    }
    $scope.showBlandPage=function(){
        $scope.showBland=true;
        $scope.showBlands=true;
        $scope.showModels = false;
        $scope.showBlands = false;
        $scope.showParttypes=false;
        $scope.showSpareparts=false;
        $scope.showParttype=false;
        $scope.showSparepart=false;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.showModelPage=function(){
        $scope.showModel = true;
        $scope.showModels = true;
        $scope.showBland = false;
        $scope.showBlands = true;
        $scope.showBlands=true;
        $scope.showParttypes=false;
        $scope.showSpareparts=false;
        $scope.showParttype = false;
        $scope.showSparepart = false;
        $scope.showSparepartDetails = false;
        $scope.showSearch = false;
        $scope.showsearchDetails = false;
    };
    $scope.showParttypePage=function(){
        $scope.showBland=false;
        $scope.showBlands=true;
        $scope.showModels = true;
        $scope.showParttype=true;
        $scope.showParttypes=true;
        $scope.showBlands=true;
        $scope.showSpareparts=false;
        $scope.showSparepart=false;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.showsparepartyPage=function(){
        $scope.showBland=false;
        $scope.showModels = true;
        $scope.showParttype=false;
        $scope.showParttypes=true;
        $scope.showSparepart=true;
        $scope.showSpareparts=true;
        $scope.showSparepartDetails=false;
        $scope.showSearch=false;
        $scope.showsearchDetails=false;
    };
    $scope.selectPartTypeabel=function(id){
        $http.get('/vehicleByPartType/'+id).success(function (data, status, headers, config){
            for(var d in data){
                if(data[d].id == id){
                    $scope.getParttypeIndex = data[d];
                }
            }
            console.log('ID:'+id);
            console.log('DATA:'+data);
            $scope.sparepartTypes = data;
            $scope.showBland=false;
            $scope.showBlands=true;
            $scope.showModel = false;
            $scope.showModels = true;
            $scope.showParttype=true;
            $scope.showParttypes=false;
            $scope.showSpareParties=false;
            $scope.showSparePartiess=false;
            $scope.showSparepart=false;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;
        });
    };

    $scope.getCurrency=function(){
        $http.get('http://free.currencyconverterapi.com/api/v3/currencies').success(function (data, status, headers, config){
           $scope.currency = data.results;
        });
    };
    $scope.searchpartModel = function (model) {

        if (model==""){
            alert('Serie number required !');
            return;
        }
        $scope.getSparePartIndex="";
        $scope.showsearchDetails=false;
        $http.get('/findByPartModel/'+model).success(function (data, status, headers, config){
            if(data!=""){
                $scope.getSparePartIndex=data;
                $scope.showBland=false;
                $scope.showSearch=true;
                $scope.showParttype=false;
                $scope.showSparepart=false;
                $scope.showsearchDetails=true;
                $scope.showSparepartDetails=false;
            }


        });

    };
    $scope.selectspareparties = function (id) {
        $http.get('/sparePartByPartType/'+id).success(function (data, status, headers, config){
            for(var d in data){
                if(data[d].id == id){
                    $scope.getSparePartties= data[d];
                }
            }
            $scope.sparepartss=data;
            $scope.showBland=false;
            $scope.showBlands=true;
            $scope.showParttype=false;
            $scope.showParttypes=true;
            $scope.showSpareParties=true;
            $scope.showSparePartiess=true;
            $scope.showSparepart=false;
            $scope.showSpareparts=false;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.selectspareparty = function (id) {
        $http.get('/vehicleBySparePart/'+id).success(function (data, status, headers, config){
            for(var d in data){
                if(data[d].id == id){
                    $scope.getSparePartIndex= data[d];
                }
            }
            $scope.sparepartss=data;
            $scope.showBland=false;
            $scope.showBlands=true;
            $scope.showParttype=false;
            $scope.showParttypes=true;
            $scope.showSpareParties=false;
            $scope.showSparePartiess=false;
            $scope.showSparepart=true;
            $scope.showSpareparts=true;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.selectVehicleModel2 = function (id) {
        $http.get('/vehicleByBland/'+id).success(function (data, status, headers, config){
            for(var d in data){
                if(data[d].id == id){
                    $scope.getVehicleByBlandIndex= data[d];
                }
            }
            $scope.vehicleModel=data;
            $scope.showModel=true;
            $scope.showBlands=true;
            $scope.showBland=false;
            $scope.showParttype=false;
            $scope.showSpareParties=false;
            $scope.showSparePartiess=false;
            $scope.showSparepart=false;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;

        });

    };
    $scope.selectVehicleModel = function (id) {
        $http.get('/modelByBland/'+id).success(function (data, status, headers, config){
            for(var d in data){
                if(data[d].id == id){
                    $scope.getVehicleModelIndex = data[d];
                }
            }
            $scope.sparepartss=data;
            $scope.showModel=true;
            $scope.showBland=false;
            $scope.showParttype=false;
            $scope.showSparepart=false;
            $scope.showSpareParties=false;
            $scope.showSparePartiess=false;
            $scope.showSparepartDetails=false;
            $scope.showSearch=false;
            $scope.showsearchDetails=false;
        });
    };
    $scope.selectsparepartyDetails = function (id) {
        $http.get('/loadCurrentUser/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));

            $scope.sparepartDetail=data;
            $scope.showBland=false;
            $scope.showParttype=false;
            $scope.showSparepart=false;
            $scope.showSparepartDetails=true;
            $scope.showSpareParties=false;
            $scope.showSparePartiess=false;
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
        $scope.confirmMsg="";
        if($scope.newUserInfo.password!=$scope.newUserInfo.cofPassword){
            $scope.confirmMsg="Please password not match !";
            return;
        }
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
            $scope.confirmMsg="";
            $scope.users=data;
            $scope.new=false;
            $scope.newUserInfo="";
            $scope.dataLoading = false;

        });

    };
    $scope.updateUserImage = function (user) {
        $scope.dataLoading = true;
        user.photo=$scope.getphoto;
        $http.post('/updateUserImage/'+user.id, user).success(function (data, status, headers, config){
            if (data=='ok'){
                $scope.users=data;
                $scope.dataLoading = false;
                window.location='/user/';
            }else {
                alert('User image not updated there is an error');
                $scope.dataLoading = false;
                return;
            }


        });

    };
    $scope.updatePartImage = function (sparePart) {
        $scope.dataLoading = true;
        sparePart.image=$scope.getphoto;
        $http.post('/updatePartImage/'+sparePart.id, sparePart).success(function (data, status, headers, config){
            if (data=='ok'){
                $scope.spareParts=data;
                $scope.dataLoading = false;
                window.location='/sparePart/';
            }else {
                alert('Spare part image not updated there is an error');
                $scope.dataLoading = false;
                return;
            }


        });

    };
    $scope.updateBlandImage = function (bland) {
        $scope.dataLoading = true;
        bland.image=$scope.getphoto;
        $http.post('/updateBlandImage/'+bland.id, bland).success(function (data, status, headers, config){
            if (data=='ok'){
                $scope.blands = data;
                $scope.dataLoading = false;
                window.location='/blandPage/';
            }else {
                alert('Bland part image not updated there is an error');
                $scope.dataLoading = false;
                return;
            }
        });
    };
    $scope.updateTypeImage = function (partType) {
        $scope.dataLoading = true;
        partType.image=$scope.getphoto;
        $http.post('/updateTypeImage/'+partType.id, partType).success(function (data, status, headers, config){
            if (data=='ok'){
                $scope.partTypes=data;
                $scope.dataLoading = false;
                window.location='/partTypePage/';
            }else {
                alert('Part type image not updated there is an error');
                $scope.dataLoading = false;
                return;
            }


        });

    };
    $scope.updateModelImage = function (partType) {
        $scope.dataLoading = true;
        partType.image=$scope.getphoto;
        $http.post('/updateModelImage/'+partType.id, partType).success(function (data, status, headers, config){
            if (data=='ok'){
                $scope.partTypes=data;
                $scope.dataLoading = false;
                window.location='/model/page/';
            }else {
                alert('Vehicle model image not updated there is an error');
                $scope.dataLoading = false;
                return;
            }


        });

    };
    $scope.updateVehicleImage = function (vehicle) {
        $scope.dataLoading = true;
        vehicle.image=$scope.getphoto;
        $http.post('/updateVehicleImage/'+vehicle.id, vehicle).success(function (data, status, headers, config){
            if (data=='ok'){
                $scope.vehicles=data;
                $scope.dataLoading = false;
                window.location='/VehiclePage/';
            }else {
                alert('Vehicle image not updated there is an error');
                $scope.dataLoading = false;
                return;
            }


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
    $scope.saveBland = function () {
        $scope.dataLoading = true;
        $scope.newBlandInfo.image=$scope.getphoto;
        $http.post('/save/bland/',$scope.newBlandInfo ).success(function (data, status, headers, config){
            if (data=='blandNameExist'){
                alert('Entered bland name exist !');
                return;
            }
            $scope.blands=data;
            $scope.new=false;
            $scope.dataLoading = false;
        });
    };
    $scope.saveModel = function () {
        $scope.dataLoading = true;
        $scope.newModelInfo.image=$scope.getphoto;
        $http.post('/save/model/',$scope.newModelInfo).success(function (data, status, headers, config){
            $scope.vehicleModels = data;
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
    $scope.updateModel = function (vehicleModel) {
        $scope.dataLoading = true;
        $http.post('/update/model/',vehicleModel).success(function (data, status, headers, config){
            $scope.vehicleModels = data;
            for(var d in data){
                if(data[d].id == vehicleModel.id){
                    data[d].edit = false;
                }
            }
            $scope.dataLoading = false;
        });
    };
    $scope.updateAddBland = function (bland) {
        $scope.dataLoading = true;
        $http.post('/update/add/bland/',bland).success(function (data, status, headers, config){
            $scope.partDetails = data;
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
    $scope.disableModel = function (vehicleModel) {
        if(confirm("do you real want to delete "+vehicleModel.modelName + "?")) {
            $http.post('/delete/model/' + vehicleModel.id, vehicleModel).success(function (data, status, headers, config) {
                $scope.vehicleModels = data;
                data.edit = false;
                window.location="/model/page/";
            });
        }
    };
    $scope.disableAddBland=function (partDetails) {
        if(confirm("do you real want to delete ?")) {
            $http.post('/delete/add/bland/' + partDetails.id, partDetails).success(function (data, status, headers, config) {
            $scope.blands = data;
            data.edit = false;
            window.location="/part/details/";
            });
        }
    };
    $scope.checkUsername=function (username) {
        $scope.errorMsg="Loading....";
            $http.get(' /UsernameExist/' + username).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));
                 if(data=='ok'){
                     $scope.disable=true;
                     $scope.errorMsg="Username exist !";
                 }else {
                     $scope.disable=false;
                     $scope.errorMsg="";
                 }



            });

    };
    $scope.login = function () {
        $scope.dataLoading = true;
        $http.post('/signin/',{username:$scope.username,password:$scope.password} ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if(data =="ok") {
                window.location='/user/';
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
    $scope.loadSerie = function () {
        $http.get('/loadSeries/').success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.series=data;
        });

    };
    $scope.loadPartDetails = function () {
        $http.get('/load/part/details/').success(function (data, status, headers, config){
            $scope.partDetails = data;
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
    $scope.loadModels = function () {
        $http.get('/list/model/').success(function (data, status, headers, config){
            $scope.vehicleModels = data;
            $scope.showModel = true;

        });

    };
    $scope.home=function(){
        window.location="/";
    };
    $scope.loadSparePart = function () {
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
    $scope.saveAddBland = function () {
        $scope.dataLoading = true;
        $http.post('/save/add/bland/',$scope.newAddBlandInfo ).success(function (data, status, headers, config){

            $scope.partDetails = data;
            $scope.new=false;
            $scope.newAddBlandInfo="";
            $scope.dataLoading = false;

        });
    };
    $scope.updateSparePart=function (sparePart) {
        $scope.dataLoading = true;
        $http.post('/updateSparePart/',sparePart).success(function (data, status, headers, config){
            $scope.spareParts=data;
            for(var d in data){
                if(data[d].id == sparePart.id){
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
            $scope.series=data;
            $scope.new=false;
            $scope.newVehicleInfo="";
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
        $scope.newPartTypeInfo.image=$scope.getphoto;
        $http.post('/savePartType/',$scope.newPartTypeInfo ).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            $scope.loadSparePartTypes = data;
            $scope.new=false;
            $scope.newPartTypeInfo = "";
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