var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.url = '/ManagementUI-BE/listName';
	$http.get($scope.url,{header : {'Content-Type' : 'application/json; charset=UTF-8'}}).then(function(response) {
        $scope.names= response.data;
     }); 
});