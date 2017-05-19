app.controller("MainController", function ($scope) {
    $scope.welcome = "Enfants De Dieu Monitoring System";
    $scope.topMenu = false;


    $scope.menu = function(){
        if($scope.topMenu == false){
            $scope.topMenu = true;
        }
        else{
            $scope.topMenu = false;
        }
    };

});
appinside.controller('employeeRegisterCtr',function ($scope,$http,dataFactory) {
    $scope.employeePage=true;
    $scope.registrationPage=false;
    $scope.editPage=false;
    $scope.message=false;
    $scope.btnStatus="Submit";
    $scope.employee={};
    $scope.showpanel=true;
    $scope.chowDownUp = function(){

        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };
    $scope.employeeList=function () {
        getEmployee();
        $scope.employeePage=true;
        $scope.editPage=false;
        $scope.registrationPage=false;
        $scope.message={};
    };
    $scope.showbtn=function () {
        $scope.message={};
        $scope.employee={};
        $scope.employeePage=false;
        $scope.editPage=false;
        $scope.registrationPage=true;
    };
    $scope.usernameExist=function (text) {
        $scope.status={message:"Loading,wait..."};
        $http.get("/usernameExist/"+text).then(function(result){

            if(result.data=="ok"){
                $scope.status={};
                $scope.btndisable=false;
            }
            if (result.data=="phoneExist"){
                $scope.btndisable=true;
                $scope.status={message:"Entered phone number exist"};
            }
        });
    };
    getEmployee();
    function getEmployee() {
        $scope.message={};
        dataFactory.Getemployee()
            .then(function (response) {
                $scope.employees = response.data;
            }, function (error) {
                $scope.status = 'Unable to load employee data: ' + error.message;
            });
    }
    $scope.getEmployeeByid=function(id) {
        $scope.message={};
        dataFactory.GetemployeeById(id)
            .then(function (response) {
                $scope.employee = response.data;
                $scope.employeePage=false;
                $scope.editPage=true;
                $scope.registrationPage=false;
            }, function (error) {
                $scope.status = 'Unable to load employee data: ' + error.message;
            });
    };

    $scope.updateEmployee=function (employee) {
        $scope.btnSubmit=true;
        $http.post('/employeeUpdate/' +employee.id,{names:employee.names,address:employee.address,phone:employee.phone,userName:employee.systemUser.userName,title:employee.title}).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=="ok"){
                getEmployee();
                $scope.message={class:"alert alert-success",message: employee.names+" Updeted successfully!!"};
                $scope.btnSubmit=false;
                $scope.employee.names="";
                $scope.employee.address="";
                $scope.employee.phone="";
                $scope.employee.userName="";
                $scope.employee.title="";
                $scope.employeePage=true;
                $scope.editPage=false;
                $scope.registrationPage=false;



            }

        });
    };
    $scope.deleteEmployee=function (employee) {
        if(confirm("do you real want to deactivate "+employee.names +"?")){
            $http.post('/employeeDelete/' +employee.id,{names:employee.names,address:employee.address,phone:employee.phone,userName:employee.systemUser.userName,title:employee.title}).success(function (data, status, headers, config){
                //alert(JSON.stringify(data));
                if (data=="ok"){
                    getEmployee();
                    $scope.message={class:"alert alert-success",message: employee.names+" deactivated successfully!!"};
                    $scope.editPage=false;
                    $scope.registrationPage=false;



                }

            });
        }

    };
    $scope.activateEmployee=function (employee) {
        if(confirm("do you real want to activate "+employee.names +"?")) {
            $http.post('/employeeActivate/' + employee.id, {
                names: employee.names,
                address: employee.address,
                phone: employee.phone,
                userName: employee.systemUser.userName,
                title: employee.title
            }).success(function (data, status, headers, config) {
                //alert(JSON.stringify(data));
                if (data == "ok") {
                    getEmployee();
                    $scope.message = {
                        class: "alert alert-success",
                        message: employee.names + " activated successfully!!"
                    };
                    $scope.editPage = false;
                    $scope.registrationPage = false;


                }

            });
        }
    };

    $scope.uploadFileCv = function(files) {
        $scope.btnSubmit=true;
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        //alert("Uploading");

        $http.post("/uploadDocument/", fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function (data, status, headers, config) {
            $scope.employee['documentCv'] = data;
            // alert(JSON.stringify($scope.trainee));
            $scope.msgcv={class:"alert alert-success",message:"Uploaded successfully"};
            $scope.btnSubmit=false;
        });
    };

    $scope.uploadFileCertificate = function(files) {
        $scope.btnSubmit=true;
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        //alert("Uploading");

        $http.post("/uploadDocument/", fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function (data, status, headers, config) {
            $scope.employee['documentCertificate'] = data;
            //alert(JSON.stringify($scope.trainee));
            $scope.msgCert={class:"alert alert-success",message:"Uploaded successfully"};
            $scope.btnSubmit=false;
        });
    };
    $scope.uploadFilephoto = function(files) {
        $scope.btnSubmit=true;
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post("/uploadImage/", fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function (data, status, headers, config) {
            $scope.employee['photo'] = data;
            $scope.msgphot={class:"alert alert-success",message:"Uploaded successfully"};
            $scope.btnSubmit=false;
        });
    };
    $scope.registerEmployee= function(){
        $scope.btnSubmit=true;
        $scope.btnStatus="Wait...";
        $http.post('/employeeRegistration/',$scope.employee).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=="phoneExist"){
                $scope.msge={class:"alert alert-danger",message:"Phone number exist"};
                $scope.btnSubmit=false;
            }
            if (data=="usernameExist"){

                $scope.msge={class:"alert alert-danger",message:"Username exist"};
                $scope.btnSubmit=false;
                $scope.btnStatus="Submit";
            }
            if (data=="ok"){
                getEmployee();
                $scope.message={class:"alert alert-success",message: $scope.employee.names+" saved successfully!!"};
                $scope.btnSubmit=false;
                $scope.employee={};
                $scope.msgphot={};
                $scope.msgCert={};
                $scope.msgcv={};
                $scope.employee.documentCv="";
                $scope.employee.documentCertificate="";
                $scope.employee.photo="";
                $scope.employeePage=true;
                $scope.editPage=false;
                $scope.registrationPage=false;



            }

        });
    };

});
appinside.controller('navbarctr',function ($scope) {
    $scope.btnshow=false;
    $scope.btnshow1=false;
    $scope.btnshow2=false;
});
appinside.controller('parentctr',function ($scope,$http,$timeout) {
    $scope.parentpage=true;
    $scope.parentList=function () {
        $scope.editpage=false;
        $scope.parentpage=true;
        $scope.parents={};
    };


    $scope.parentById=function(id){
        $http.get('/parentById/'+id).success(function(response) {
            $scope.parents = response;
            $scope.editpage=true;
            $scope.parentpage=false;
        });
    };
    $('.ng-table-filters').show();
    $('.ng-table-pager').show();
    $scope.updateParent=function (parents) {
        $scope.btnSubmit=false;
        $http.post('/parentById/'+parents.id,{fatherNames:$scope.parents.fatherNames,fatherStatus:$scope.parents.fatherStatus,matherNames:$scope.parents.matherNames,matherStatus:$scope.parents.matherStatus,nearestParent:$scope.parents.nearestParent,others:$scope.parents.others}).success(function(response) {
            if(response=="ok"){
                $scope.msg={class:"alert alert-success",message:parents.child.firstName+" "+parents.child.lastName +"'s parents updated successfully"};
                $scope.editpage=false;
                $scope.parentpage=true;
                $scope.btnSubmit=true;
                $timeout(function() {

                    $scope.msg = {};

                }, 3000);
            }else {
                $scope.btnSubmit=true;
                $scope.msg={class:"alert alert-danger",message:parents.child.firstName+" "+parents.child.lastName +"'s parents not updated ;"+ "error " +response.data};
                $scope.editpage=true;
                $scope.parentpage=false;
                $timeout(function() {

                    $scope.msg = {};

                }, 3000);

            }

        });
    }

});
appinside.controller('neighbourctr',function ($scope,$http,$timeout,dataFactory) {
    $scope.neighborpage=true;
    $scope.selected={};
    $scope.getTemplate = function (neighbour) {
     if (neighbour.id === $scope.selected.id){
      return 'edit';
     }
     else return 'display';
    };
    $scope.neighbourList=function () {
        neighbourAll();
        $scope.editpage=false;
        $scope.neighborpage=true;
        $scope.neighbours={};
    };
    neighbourAll();
    function neighbourAll() {
        $scope.message={};
        dataFactory.Getneighbour()
            .then(function (response) {
                $scope.neighbours = response.data;
                $scope.editpage=false;
                $scope.neighborpage=true;
            }, function (error) {
                $scope.status = 'Unable to load employee data: ' + error.message;
            });
    }

    $scope.neighbourById=function(neighbour){
       $scope.selected=angular.copy(neighbour)
    };
    $scope.updateNeighbour=function (neighbour) {
        $scope.btnSubmit=true;
        $http.post('/UpdateneighbourById/'+neighbour.id,{neighbNames:neighbour.neighbNames}).success(function(response) {
            if(response=="ok"){
            $scope.selected={};
                $scope.btnSubmit=false;
                $scope.msg={class:"alert alert-success",message:neighbour.child.firstName+" "+neighbour.child.lastName +"'s neighbour updated successfully"};


                neighbourAll();
                $timeout(function() {

                    $scope.msg = {};

                }, 3000);
            }else {
            $scope.selected={};
                $scope.btnSubmit=true;
                $scope.msg={class:"alert alert-danger",message:neighbour.child.firstName+" "+neighbour.child.lastName +"'s neighbour not updated ;"+ "error " +response.data};

                $timeout(function() {

                    $scope.msg = {};

                }, 3000);

            }

        });
    }

});
appinside.controller('clinicctr',function($scope,$http,dataFactory,childFactory,$timeout){
$scope.clinicpage=true;
$scope.newstatiment=false;
$scope.btnStatus="Submit";
$scope.selected={};
$scope.cons={};
$scope.getchildByid=function(id) {
          $scope.message={};
          childFactory.GetChildById(id).then(function (response) {
                  $scope.childrens = response.data;
                  $scope.dob=Date.parse($scope.childrens.dob)

              }, function (error) {
                  $scope.status = 'Unable to load employee data: ' + error.message;
              });
      };

getchildren();
  function getchildren() {
        $scope.message={};
        childFactory.Getchildren()
            .then(function (response) {
                $scope.childrenss = response.data;
            }, function (error) {
                $scope.status = 'Unable to load children data: ' + error.message;
            });


    };
    $scope.getTemplate=function(cons){
     if(cons.id===$scope.selected.id){
       return 'edit'
     }else
      return 'display'

    }
    $scope.editConsult=function(cons){
    $scope.selected=angular.copy(cons);
    }
    $scope.updateConsult=function(cons){
       $http.post('/updateConsult/'+cons.id,cons).success(function (data, status, headers, config){
                    //alert(JSON.stringify(data));
                    if (data=="ok"){
                        this.cons={};
                        $scope.message={class:"alert alert-success",message:"Consultation updated successfully!!"};

                        $timeout(function() {

                            $scope.message = {};

                        }, 3000);



                    }else {
                        $scope.btnSubmit=false;
                        $scope.status={message:"Error "+data}
                    }

                });
    }
    $scope.loadConsulutation=function(){

     $http.get('/allConsultation/').success(function (data, status, headers, config){
                    //alert(JSON.stringify(data));
                   $scope.consultations=data;

                });

    }
    $scope.saveConsulutation=function(){
    $scope.btnSubmit=true;
    $scope.btnStatus="Wait...";

     $http.post('/saveConsult/',$scope.cons).success(function (data, status, headers, config){
                //alert(JSON.stringify(data));
                if (data=="ok"){
                 $scope.btnSubmit=false;
                    $scope.cons={};
                    $scope.newstatiment=false;
                    $scope.message={class:"alert alert-success",message:"Consultation saved successfully!!"};

                    $timeout(function() {

                        $scope.message = {};

                    }, 3000);



                }else {
                    $scope.btnSubmit=false;
                    $scope.status={message:"Error "+data}
                }

            });

    }
});
appinside.controller('childrenCtr',function ($scope,$http,childFactory,$timeout) {
    $scope.childrenPage=true;
    $scope.registrationPage=false;
    $scope.editPage=false;
    $scope.message=false;
    $scope.btnStatus="Submit";
    $scope.children={};
    $scope.showpanel=true;
    $scope.step = 1;
    $scope.question={q1:"When the child has left the family?",q2:"When did he come to the project?",
    q3:"Has he attended another center? if yes which one",q4:"Reasons to go on the street"
    };
    $scope.setStep = function(step){
        $scope.step = step;
    };

    $scope.chowDownUp = function(){

        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };
    $scope.childrenList=function () {
        getchildren();
        $scope.childrenPage=true;
        $scope.editPage=false;
        $scope.registrationPage=false;
        $scope.message={};
    };
    $scope.showbtn=function () {
        $scope.message={};
        $scope.childrenPage=false;
        $scope.editPage=false;
        $scope.registrationPage=true;
    };
    $scope.usernameExist=function (text) {
        $scope.status={message:"Loading,wait..."};
        $http.get("/usernameExist/"+text).then(function(result){

            if(result.data=="ok"){
                $scope.status={};
                $scope.btndisable=false;
            }
            if (result.data=="phoneExist"){
                $scope.btndisable=true;
                $scope.status={message:"Entered phone number exist"};
            }
        });
    };
    getchildren();
    function getchildren() {
        $scope.message={};
        childFactory.Getchildren()
            .then(function (response) {
                $scope.childrens = response.data;
            }, function (error) {
                $scope.status = 'Unable to load children data: ' + error.message;
            });


    }
    $scope.getchildByid=function(id) {
        $scope.message={};
        childFactory.GetChildById(id).then(function (response) {
                $scope.childrens = response.data;
                $scope.childrenPage=false;
                $scope.editPage=true;
                $scope.registrationPage=false;
                $scope.dob=Date.parse($scope.childrens.dob)

            }, function (error) {
                $scope.status = 'Unable to load employee data: ' + error.message;
            });
    };
    $scope.updateChild=function (childrens) {
         $scope.btnSubmit=true;
         $http.post('/childUpdate/' +childrens.id,{firstName:childrens.firstName,lastName:childrens.lastName,sureName:childrens.sureName,province:childrens.province,district:childrens.district,sector:childrens.sector,cellure:childrens.cellure,dob:$scope.dob,photo:childrens.photo,gender:childrens.gender,weight:childrens.weight,height:childrens.height,nationId:childrens.nationId,}).success(function (data, status, headers, config){
             //alert(JSON.stringify(data));
             if (data=="ok"){
                 getchildren();
                 $scope.message={class:"alert alert-success",message: childrens.firstName+" "+childrens.lastName+" Updeted successfully!!"};
                 $scope.btnSubmit=false;
                 $scope.childrens={};
                 $scope.childrenPage=true;
                 $scope.editPage=false;
                 $scope.registrationPage=false;
                 $timeout(function() {

                     $scope.msg = {};

                 }, 3000);



             }

         });
     };
     $scope.deleteChild=function (childrens) {
         if(confirm("do you real want to delete "+childrens.firstName +" "+childrens.lastName+"?")){
             $http.post('/childDelete/' +childrens.id).success(function (data, status, headers, config){
                 //alert(JSON.stringify(data));
                 if (data=="ok"){
                     getchildren();
                     $scope.message={class:"alert alert-success",message:childrens.firstName +" "+childrens.lastName+" deleted successfully!!"};
                     $scope.editPage=false;
                     $scope.registrationPage=false;
                     $timeout(function() {

                         $scope.msg = {};

                     }, 3000);


                 }

             });
         }

     };



    $scope.uploadFilephoto = function(files) {
        $scope.btnSubmit=true;
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

        $http.post("/uploadImage/", fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        }).success(function (data, status, headers, config) {
            $scope.children['photo'] = data;
            $scope.msgphot={class:"alert alert-success",message:"Uploaded successfully"};
            $scope.btnSubmit=false;
        });
    };
    $scope.registerChild= function(){
        $scope.btnSubmit=true;
        $scope.btnStatus="Wait...";
        $http.post('/childRegistration2/',$scope.children).success(function (data, status, headers, config){
            //alert(JSON.stringify(data));
            if (data=="nameExist"){
                $scope.msge={class:"alert alert-danger",message:$scope.children.firstName +" "+$scope.children.lastName+ " exist in the system"};
                $scope.btnSubmit=false;
            }
            if (data=="ok"){
                getchildren();
                $scope.message={class:"alert alert-success",message: $scope.children.firstName +" "+$scope.children.lastName+" saved successfully!!"};
                $scope.btnSubmit=false;
                $scope.children={};
                $scope.msgphot={};
                $scope.childrenPage=true;
                $scope.editPage=false;
                $scope.registrationPage=false;
                setStep(1);
                $timeout(function() {

                    $scope.msg = {};

                }, 3000);



            }else {
                $scope.btnSubmit=false;
                $scope.status={message:"Error "+data}
            }

        });
    };
    $scope.printReport = function(divName) {
        //alert(divName);
        $('.ng-table-filters').hide();
        $('.ng-table-pager').hide();
        $('#notforprinting').hide();

        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        var popupWin = window.open('', '_blank', 'width='+screen.width,'height='+screen.height);
        popupWin.document.open();

        var includeThis = '<link rel="stylesheet" media="print" href="/assets/bootstrap/css/bootstrap.css">'
            +'<link rel="stylesheet" media="print" href="/assets/bootstrap/css/bootstrap-theme.css">'
            +''
            +''
            +'';

        printContents = '<center><img src="/assets/images/logo/logo.svg" class="img-circle img-responsive" style="width: 150px;height: 150px" alt="Logo" ><h3>EDD Child information</h3><br/><br/><br/></center>'+printContents;

        var printThis = '<html><head>'+includeThis+'</head><body onload="window.print()" style = "width:100%; width:100%">' + printContents + '</html>';

        $('.ng-table-filters').show();
        $('.ng-table-pager').show();
        $('#notforprinting').show();


        popupWin.document.write(printThis);
        popupWin.document.close();
    }

});
appinside.controller('myController', function ($scope,$http) {

      $scope.initiale= function (){
        $http.get('/childStatistic/').success(function (data, status, headers, config){
            $scope.Report = data;
            $(function () {
                $('#container').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Children statistic in year '+data.date.year
                    },
                    xAxis: {
                        categories: data.months
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Number'
                        }
                    },
                    legend: {
                        reversed: false
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    series: [{
                        name: 'Registered',
                        data: data.data[0]
                    }, {
                        name: 'Desirted ',
                        data: data.data1[0]
                    }]
                });
            });
        });
    };
    $scope.initiale();
});



app.controller("login", function ($scope, $http) {
    $scope.btnstatus="Login";
    $scope.username = "";
    $scope.password = "";

    $scope.msg = {};

    $scope.submit = function(){
        $scope.btnstatus="Loading,wait...";
        $scope.msg.show = false;
        $http.post('/signin/', {username: $scope.username, password: $scope.password}).success(function (data, status, headers, config) {
            if (data == "ok"){
                window.location = "/dashbord/";
            }
            else{
                $scope.msg.show = true;
                $scope.msg.msg = "Wrong username or password! Please try again!";
                $scope.msg.class = "alert alert-danger";
                $scope.btnstatus="Login";
                $scope.password="";
                //alert("Wrong username or password");
            }
        });
    }
});




