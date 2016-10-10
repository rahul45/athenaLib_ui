var app=angular.module("athena",["ngRoute"]);

app.controller("loginPageCntrlr",function($scope){
	$scope.a = "hello athena";
	console.log("sdfsdf...."+$scope.a);
});

app.controller("mainController",function($rootScope,$scope){
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
		console.log("inside the datePicker");
		var d = new Date();
    	var n = d.getDate();
     	var m=d.getMonth();
		var y=d.getFullYear();
    	$("#joiningDate").val(n+"/"+(m+1)+"/"+y);
	};

	$scope.addNewStudent=function(student){
		this.student=student;
		console.log("inside the function");
		console.log("student"+student.firstName+"::"+student.dateOfJoining);
	};
	
});

/*app.config(function($routeProvider) {
	
	$routeProvider.when("http://localhost:8090/athenaLib/#/fd",{template:'<h1>Welcome to our shopping site and Happy Shopping</h1>'}); 
});*/
