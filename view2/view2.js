
'use strict';

angular.module('myApp.view2', ['ngRoute',
  'angularAudioRecorder'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .config(function (recorderServiceProvider) {
      recorderServiceProvider
        .forceSwf(window.location.search.indexOf('forceFlash') > -2)
        .setSwfUrl('lib/recorder.swf')
        .withMp3Conversion({convert : false, config : {
          bitRate : 320
        }});
    })

.controller('View2Ctrl', ['$scope','recorderService','blobService',function(scp,recorderService,blobService) {
  console.log(scp.innerCtrl);
  console.log("view2Ctrl 222 loaded");
  scp.tLimit= 10;
  scp.sentence = randSent();
  scp.ready = false;
  scp.upToTheCloud = function(model) {
    console.log('go to the cloud',typeof model,scp.recorder,scp.recorded);
    recorderService.controller('mainAudio').x = randSent();
    console.log(recorderService.controller('mainAudio'));
  };

  scp.upBlob = function(){
    
    blobService.setBlob(recorderService.controller('mainAudio').audioModel);
  };

  scp.readyUp = function(){
    scp.ready = true;
  };



}]);


function randSent() {

    var words = ["eat","the","like","fine","great","go","lemon","word","link","pizza","name","spam"]
      
        var result = [];
        var i = parseInt( Math.floor(Math.random()*4) + 6 );
        while (i -- > 0) {
          result.push(words[parseInt(Math.random()*words.length)])
        }
        console.log(result.join(" "));
        return result.join(" ");
  
};