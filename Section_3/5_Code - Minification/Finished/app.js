var myApp = angular.module('myApp', []);
/*
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $log.info($scope);
    
}]);
*/

myApp.controller("mainController",["$scope","$log",function(o,p){p.info(o)}]);