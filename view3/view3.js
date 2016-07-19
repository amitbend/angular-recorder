'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

    .config(function (recorderServiceProvider) {
      recorderServiceProvider
        .forceSwf(window.location.search.indexOf('forceFlash') > -1)
        // .setSwfUrl('lib/recorder.swf')
        // .withMp3Conversion({convert : true, config : {
        //   bitRate : 320
        // }})
        ;
    })

.controller('View3Ctrl', ['$scope','AuthService',function(scp,AuthService) {
	console.log("view1Ctrl 333 loaded");


	scp.finished = false;

	var init = function () {
	    AuthService.sendSWF().then( function (res){
	      console.log('response from server is',res);
	      scp.authResults = decide(res);
	      scp.finished = true;
	
	    } , function(err) {
	      console.log('error occured: ', err);
	      scp.finished = true;
	      scp.authResults = 4;
	    })
	}

	init();



}]);


function decide(res) {
	if (res){
		return 1;
	}
	else{
		return 2;
	}

};