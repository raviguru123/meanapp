var app=angular.module("main.module");
app.controller("next",function($scope){
	$scope.firstvar="controller value";
	
	$scope.set=function(){
		$scope.firstvar="second";
		$scope.$digest();
	}	
});




