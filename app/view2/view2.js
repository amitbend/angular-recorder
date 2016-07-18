'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

// .factory('nameService', ['$http',function($http,name){
// 	console.log('hi i\'m a service');
// 	var x = 1;
// 	return x;
// }])

.controller('View2Ctrl', ['$scope','NameService',function($scope,NameService) {




	console.log("view1Ctrl 222 loaded");
	$scope.loadingClass = false;

    $scope.authName = function (name) {
    	// $scope.loadingClass = true;
    	// $scope.resolution = NameService.nameExists(name);
    	// if (!$scope.resolution) {
    	// 	$scope.failed = true;
    	// 	$scope.loadingClass = false;
    	// }

    	 $scope.loadingClass = true;
    	NameService.nameExists(name)
  	.then(function successCb(res) {
  		console.log('res is:', res);
  		$scope.resolution = true;
  	}, function errorCb(res){
  		console.log('error is ', res)
  		$scope.resolution = false;
		$scope.failed = true;
		$scope.loadingClass = false;
  	});

    }

    // console.log(nameService());
}]);

// .controller('View2Ctrl', ['nameService','$scope',function($scope,nameService) {
// 	console.log("view1Ctrl 222 loaded");
//     $scope.authName = function (w) {
//     	console.log(w);
//     }
//     // console.log(nameService());
// }]);