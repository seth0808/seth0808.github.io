$(document).ready(function () {
    
    
   $("#myexperience").mouseenter( function () {
      $(this).fadeTo("fast", 0.75); 
   }); 
   $("#index").mouseenter( function () {
      $(this).fadeTo("fast", 0.75); 
   }); 
   $("#guatemala").mouseenter( function () {
      $(this).fadeTo("fast", 0.75); 
   }); 
   
   
   
   $("#myexperience").mouseleave( function () {
      $(this).fadeTo("fast", 1); 
   }); 
   $("#index").mouseleave( function () {
      $(this).fadeTo("fast", 1); 
   }); 
   $("#guatemala").mouseleave( function () {
      $(this).fadeTo("fast", 1); 
   }); 
   
   $("#imgone").mouseenter( function () {
       $("#onep").fadeTo("fast", 1)
    });
    $("#imgone").mouseleave( function () {
       $("#onep").fadeTo("fast", 0)
    });

    $("#imgtwo").mouseenter( function () {
       $("#twop").fadeTo("fast", 1)
    });
    $("#imgtwo").mouseleave( function () {
       $("#twop").fadeTo("fast", 0)
    });
    
   $("#imgthree").mouseenter( function () {
       $("#threep").fadeTo("fast", 1)
    });
    $("#imgthree").mouseleave( function () {
       $("#threep").fadeTo("fast", 0)
    });
    
    $("#imgfour").mouseenter( function () {
       $("#fourp").fadeTo("fast", 1)
    });
    $("#imgfour").mouseleave( function () {
       $("#fourp").fadeTo("fast", 0)
    });
    
    $("#imgfive").mouseenter( function () {
       $("#fivep").fadeTo("fast", 1)
    });
    $("#imgfive").mouseleave( function () {
       $("#fivep").fadeTo("fast", 0)
    });
});

var appname = angular.module('appname', []);

appname.controller('MainController', ['$scope', 'info', function($scope, info) {
  info.success(function(data) {
    $scope.info = data;
  });
}]);

appname.controller('appCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
}]);

appname.factory('info', ['$http', function($http) { 
  return $http.get('http://guatemala-site.orionhub.org:8000/json.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
