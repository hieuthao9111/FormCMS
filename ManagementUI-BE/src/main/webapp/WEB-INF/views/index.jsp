<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<p>Select a car:</p>

<select ng-model="userName" ng-options="x for x in names"></select>

<h1>You selected: {{userName}}</h1>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.url = "/ManagementUI-BE/list";
	$http.get($scope.url,{header : {'Content-Type' : 'application/json; charset=UTF-8'}}).then(function(response) {
        $scope.names= response.data;
        console.log($scope.names);
     }); 
});
</script>

<p>Change the name inside the input field, and you will see the name in the header changes accordingly.</p>

</body>
</html>