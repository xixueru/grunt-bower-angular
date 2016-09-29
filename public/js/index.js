var App = angular.module("App", []);
/*
 * App.controller 声明ng-controller的方法
 * “first” 这个ng-controller的名称
 * function($scope){} 这个ng-controller的实体
 */
App.controller("first", function($scope) {
	// $scope传入了{data:{message:"Hello"}}对象，并在HTML代码中直接使用了data.message来调用。
	$scope.list = [
		{
			name : 'john'
		},

		{
			name : 'daiv'
		},
		{
			name : 'lily'
		}
	];
	$scope.data = {
		message : 'hello'
	};
	$scope.abc = 'abc';
	$scope.abc = function(){
		alert($scope.data.message)
	}
	console.log($scope)

})