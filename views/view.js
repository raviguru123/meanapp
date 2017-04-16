var app=angular.module('main.module');

app.controller('testController', ['$scope', function($scope){
	$scope.name="i am nested controller value";
}]);

