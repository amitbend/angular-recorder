(function () {
  'use strict';

  angular.module('recorderDemo', [
    'angularAudioRecorder'
  ])
    .controller('DemoController', function ($scope, $timeout) {
      console.log("Loaded");

    })
    .config(function (recorderServiceProvider) {
      recorderServiceProvider
        .forceSwf(window.location.search.indexOf('forceFlash') > -1)
        .setSwfUrl('lib/recorder.swf')
        .withMp3Conversion(convert : true, config : {
          bitRate : 320
        });
    });

})();