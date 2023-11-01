// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    $scope.name = 'John Doe'
    $scope.occupation = 'Coder'

    $scope.getname = function () {
        return 'John Doe'
    }

    console.log($scope);
}]);



