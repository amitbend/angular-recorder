
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

    var words = ["I have to go now", "Please leave me a message","I have never been to Tokyo"
    ,"Can you please help me","I'm trying to fix a problem","I usually drive a car",
    "Print this photo ASAP","I just ate a lot of sushi", "I feel really sleepy now",
    "You have many great ideas","We've created this cool technology"]
      
        var result = [];
        result.push(words[parseInt(Math.random()*words.length)])
        return result[0];
  
};