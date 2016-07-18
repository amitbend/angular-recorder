


angular.module('myApp.services', []); //instantiates

angular.module('myApp.services') //gets

.factory('AuthService', function($http) { 

  authRes = function() {
    console.log('starting upload process...');
    var formData = new FormData();
    formData.append("swf", formData, "lib/recorder.swf");

    var boolResponse = $http({
      method : 'POST',
      data : { file : formData , payload : 'whatever'  } ,
      url : 'http://localhost:8080/auth'
    })

    return boolResponse;
  }


  return { 'sendSWF' : authRes};

})

.factory('NameService', function($http) { 

  nameExists = function(name) {
    var boolResponse = $http({
      method : 'POST',
      data : { 'name' : name },
      url : 'http://localhost:8080/auth'
    })

    return boolResponse;
  }


  return { 'nameExists' : nameExists};

});