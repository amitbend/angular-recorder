

angular.module('myApp.services', []); //instantiates

angular.module('myApp.services') //gets

.factory('NameService', function($http) { 

  nameExists = function(name) {
  	var boolResponse = $http({
  		method : 'GET',
  		url : 'http://jsonplaceholder.typicode.com/posts/233333'
  	})

  	// var boolRespone = $http({
  	// 	method : 'GET',
  	// 	url : 'http://jsonplaceholder.typicode.com/posts/233333'
  	// }).then(function successCb(res) {
  	// 	console.log('res is:', res);
  	// }, function errorCb(res){
  	// 	console.log('error is ', res)
  	// });

  	// if (name === 'amit' || name === 'roee') {
  	// 	bool = true
  	// }
  	// else {
  	// 	bool = false
  	// }
  	// return bool;

  	return boolResponse;
  }


  return { 'nameExists' : nameExists};

});