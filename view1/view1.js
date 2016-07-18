'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

// .factory('nameService', ['$http',function($http,name){
// 	console.log('hi i\'m a service');
// 	var x = 1;
// 	return x;
// }])

.controller('View1Ctrl', ['$scope','NameService',function(scp,NameService) {




	console.log("view1Ctrl 111 loaded");
	scp.loadingClass = false;

    scp.authName = function (name) {


    	 scp.loadingClass = true;
    	NameService.nameExists(name)
  	.then(function successCb(res) {
  		console.log('res is:', res);
  		scp.resolution = true;
  	}, function errorCb(res){
  		console.log('error is ', res)
  		scp.resolution = false;
		scp.failed = true;
		scp.loadingClass = false;
  	});

    }

}]);