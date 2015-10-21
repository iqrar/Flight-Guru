'use strict';

angular.module('KayakApp')
  .controller('MianCtrl',['$scope', '$http','$window',function ($scope,$http,$window) {
   
  // Getting data from server by using jsonp
  var url = "http://www.kayak.com/h/mobileapis/directory/airlines/homework?callback=JSON_CALLBACK&name=jsonp";
  $http.jsonp(url);

  window.invalidCallbackFunctionName =function(data) {
     $scope.airlines = data;
     $window.localStorage.setItem('airlines', JSON.stringify(data));
  };
     
    var airlines =  $window.localStorage.getItem('airlines');
    $scope.airlines = JSON.parse(airlines);

  $scope.airelineDetails = function(item){
     
     $window.localStorage.setItem('airline', JSON.stringify(item));
     var airline =  $window.localStorage.getItem('airline');
     $scope.details= JSON.parse(airline);
     $scope.phone = ($scope.details.phone) ? $scope.details.phone: false;
     $scope.siteExist = ($scope.details.site) ? $scope.details.site: false;
     $scope.url = $scope.details.site; 
     $scope.site= $scope.url.split('/')[0];

  };
    var localstorage = ($window.localStorage.getItem('airline'));

    // If value is in localstorage then get airline info from localstorage
    if(localstorage){
      $scope.details = JSON.parse(localstorage);
      $scope.phone = ($scope.details.phone) ? $scope.details.phone: false;
      $scope.siteExist = ($scope.details.site) ? $scope.details.site: false;
      $scope.url = $scope.details.site;
      $scope.site= $scope.url.split('/')[0];
    }
    
  $scope.checkStatus = function(number,code){
     console.log(code);
     // Month array to get exact month
     var monthNames = [1,2,3,4,5,6,7,8,9,10,11,12];
     var date = new Date();
     var day = date.getDate();
     var month = date.getMonth();
     var year = date.getFullYear();
     var today = year +'-0'+ monthNames[month]  +'-'+ day;
     
     //Url to check flight
     window.location = 'http://www.kayak.com/tracker/'+code+'-'+number+'/'+today;
    
  };

}]);















