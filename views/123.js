angular.element('<script src="plugins/jquery/jquery.min.js"></script>').appendTo(element);

var app=angular.module("main.module",[]);

app.controller("mainController",["$scope",function($scope){
	$scope.name="parent Controller name";
}]);