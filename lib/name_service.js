


angular.module('myApp.services', []); //instantiates

angular.module('myApp.services') //gets

.service('mynameService',function($http){
  var name = '';
  this.getName = function(){
    return this.name;
  };
  this.setName = function(newName){
    this.name = newName;
  };
})

.service('blobService',function($http){
  var blob = new Blob();
  this.getBlob = function(){
    return this.blob;
  };
  this.setBlob = function(newBlob){
    console.log('newblob',typeof newBlob)
    this.blob = newBlob;
  };
})


.factory('AuthService', function($http) { 
  authRes = function(aud) {
    console.log('starting upload process...');
    var formData = new FormData();
    formData.append('file',aud);

    var boolResponse = $http({
      method : 'POST',
      data :   formData  ,
      crossDomain : true,
      url : 'http://localhost:8080/SpeakerReco/upload',
      headers: {'Content-Type': undefined},
      transformRequest: angular.identity

    })
    return boolResponse;
  }


  return { 'sendSWF' : authRes};

})

.factory('NameService', function($http) { 

  nameExists = function(name) {
    var boolResponse = $http({
      method : 'GET',
      crossDomain : true,
      url : 'http://localhost:8080/SpeakerReco/upload?name=' + name
    })

    return boolResponse;
  }


  return { 'nameExists' : nameExists};

});


function getFile(){
      var audio;
    var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onload = function(e){
    //   if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    //     audio = xmlhttp.responseText;
    //   }
    // };
    xmlhttp.open("GET","lib/recorder.swf",false);
    xmlhttp.send();

if (xmlhttp.status === 200) {
    audio = xmlhttp.response;
    // console.log('audio:',audio);  
}
       return audio }
