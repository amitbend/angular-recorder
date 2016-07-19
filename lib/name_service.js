


angular.module('myApp.services', []); //instantiates

angular.module('myApp.services') //gets

.service('mynameService',function($http){
  var name = '';
  this.getName = function(){
    return name;
  };
  this.setName = function(newName){
    this.name = newName;
  };
})

.service('blobService',function($http){
  var blob = new Blob();
  this.getBlob = function(){
    return blob;
  };
  this.setBlob = function(newBlob){
    console.log('newblob',typeof newBlob)
    this.blob = newBlob;
  };
})


.factory('AuthService', function($http) { 
  authRes = function() {
    console.log('starting upload process...');
    // var formData = new FormData();
    // formData.append("recorder.swf", formData, "recorder.swf");
    // console.log(formData);
    var aud = getFile();
    var boolResponse = $http({
      method : 'POST',
      data :  { 'file' : aud  } ,
      crossDomain : true,
      url : 'http://localhost:8080/SpeakerReco/upload',
      headers: {'Content-Type': 'false'}

    })
    return boolResponse;
  }


  return { 'sendSWF' : authRes};

})

.factory('NameService', function($http) { 

  nameExists = function(name) {
    var formdata = new FormData();
    formdata.append('name',name);


    var boolResponse = $http({
      method : 'POST',
      data : formdata,
      processData: false,
      contentType: false,
      crossDomain : true,
      url : 'http://localhost:8080/SpeakerReco/upload'
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
