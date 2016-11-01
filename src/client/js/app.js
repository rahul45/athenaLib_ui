var app=angular.module("athena",["ngRoute"]);

app.controller("loginPageCntrlr",function($scope){
	$scope.a = "hello athena";
	console.log("sdfsdf...."+$scope.a);
});

app.controller("mainController",function($rootScope,$scope,$http){
	console.log("inside the main controller");
	$scope.student={};
	$scope.isHome=false;
	$scope.isRegisteration=true;
	$scope.isPendingFee=true;
	$scope.isUpdate=true;
	$scope.isAllList=true;
	$scope.isSearch=true;
	
	$scope.gotoHome=function(){
		$scope.isHome=false;
		$scope.isRegisteration=true;
		$scope.isPendingFee=true;
		$scope.isUpdate=true;
		$scope.isAllList=true;
		$scope.isSearch=true;
	};
	
	$scope.gotoAddNew=function(){
		$scope.isHome=true;
		$scope.isRegisteration=false;
		$scope.isPendingFee=true;
		$scope.isUpdate=true;
		$scope.isAllList=true;
		$scope.isSearch=true;
	};
	
	$scope.gotoSearch=function(){
		$scope.isHome=true;
		$scope.isRegisteration=true;
		$scope.isPendingFee=true;
		$scope.isUpdate=true;
		$scope.isAllList=true;
		$scope.isSearch=false;
	};
	
	$scope.gotoUpdate=function(){
		$scope.isHome=true;
		$scope.isRegisteration=true;
		$scope.isPendingFee=true;
		$scope.isUpdate=false;
		$scope.isAllList=true;
		$scope.isSearch=true;
	};
	
	$scope.gotoAllList=function(){
		$scope.isHome=true;
		$scope.isRegisteration=true;
		$scope.isPendingFee=true;
		$scope.isUpdate=true;
		$scope.isAllList=false;
		$scope.isSearch=true;
	};
	$scope.gotoPendingFee=function(){
		$scope.isHome=true;
		$scope.isRegisteration=true;
		$scope.isPendingFee=false;
		$scope.isUpdate=true;
		$scope.isAllList=true;
		$scope.isSearch=true;
	};

	$scope.selectTodayDate=function(){
		console.log("inside");
		$http({
  method: 'GET',
  url: 'http://localhost:8090/athenaLib/athena/delete'
}).then(function successCallback(response) {
    console.log("safsfdsf");
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
  	console.log("error");
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
};

	$scope.addNewStudent=function(student){
		
		this.student=student;
		console.log("inside the function");
		console.log("student"+student.firstName+"::"+student.dateOfJoining);
		//addNewUSer(student);/*

var config = {
                headers: {
   				'Content-Type':'application/json',
   				'Accept':'application/json'
 			}
            };

            $http.post('http://localhost:8090/athenaLib/athena/addnew', student, config)
            .success(function (data) {
                console.log("success");
                $scope.PostDataResponse = data;
            });
        };

	/**********************SEnd to backend....................*/

});

/*app.config(function($routeProvider) {
	
	$routeProvider.when("http://localhost:8090/athenaLib/#/fd",{template:'<h1>Welcome to our shopping site and Happy Shopping</h1>'}); 
});*/
