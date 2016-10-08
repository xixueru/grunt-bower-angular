var App = angular.module("App", ['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{template:"这是首页"})
	.when('/first',{template:"这是第一页"})
	.when('/second',{templateUrl:'route.html'})
	.when('/third',{template:"这是第三页"})
	.otherwise({redirectTo:'/first'})
}]);
/*
 * App.controller 声明ng-controller的方法
 * “first” 这个ng-controller的名称
 * function($scope){} 这个ng-controller的实体
 */
App.controller("first", function($scope, $rootScope) {
	// $scope传入了{data:{message:"Hello"}}对象，并在HTML代码中直接使用了data.message来调用。
	$scope.list = [{
			name: 'john',
			love: 'football',
			sex: 'man'
		},

		{
			name: 'daiv',
			love: 'basketball',
			sex: 'woman'
		}, {
			name: 'lily',
			love: 'basketball',
			sex: 'man'
		}
	];
	$scope.data = {
		message: 'hello',
		url: 'template.html'
	};
	$scope.abc = 'abc';
	$scope.abc = function() {
		alert($scope.data.message)
	}
	$scope.getUrl = function() {
		return 'template.html'
	}
	console.log($scope)
	console.log($rootScope)
})
// 测试$rootscope
App.controller("second", function($scope, $rootScope) {
	$rootScope.lastname="xixueru";
})