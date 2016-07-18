'use strict';

angular.module('myApp.view1', ['ngRoute',
  'angularAudioRecorder'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    .config(function (recorderServiceProvider) {
      recorderServiceProvider
        .forceSwf(window.location.search.indexOf('forceFlash') > -1)
        .setSwfUrl('lib/recorder.swf')
        .withMp3Conversion({convert : true, config : {
          bitRate : 320
        }});
    })

.controller('View1Ctrl', ['$scope','AuthService',function($scope,AuthService) {
	console.log("view1Ctrl 111 loaded");
	$scope.tLimit= 10;
	$scope.sentence = randSent();
	$scope.ready = false;
	
	$scope.readyUp = function(){
		$scope.ready = true;
	};
	$scope.dummy = function() {
		console.log('dummy');
	}

	$scope.startauth = function(){
		AuthService.sendSWF().then( function (res){
			console.log('response from server is',res);
		} , function(err) {
			console.log('error occured: ', err);
		})
	};

}]);


function randSent() {

		var words = ["eat","the","like","fine","great","go","lemon","word","link","pizza","name","spam"]
			function rand_word(){
				var result = [];
				var i = parseInt( Math.floor(Math.random()*4) + 6 );
				while (i -- > 0) {
					result.push(words[parseInt(Math.random()*words.length)])
				}
				return result.join(" ");
			}
		console.log(rand_word());
};