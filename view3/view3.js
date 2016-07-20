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

.controller('View3Ctrl', ['$scope','AuthService','mynameService','blobService',function(scp,AuthService,mynameService,blobService) {
	console.log("view1Ctrl 333 loaded");


	scp.finished = false;

	var init = function () {
	    AuthService.sendSWF(blobService.getBlob()).then( function (res){
	      scp.authResults = decide(res,mynameService.getName());
	      console.log('my decision is:',scp.authResults);
	      scp.finished = true;
	
	    } , function(err) {
	      console.log('error occured: ', err);
	      scp.finished = true;
	      scp.authResults = 4;
	    })
	}

	init();



}]);


function decide(res,myname) {
	if (res){
		console.log('res:',res);

		var best = res.data.results[0].best;
		if (best.speaker !== myname){
			return 3;
		}
		if (best.score > 1){
			return 1;
		}
		return 2;


	}
	else{
		return 4;
	}

};