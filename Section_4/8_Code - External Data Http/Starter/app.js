var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $http.get('/api')
        .success(function (result) {
            $scope.rules = result;
        })
        .error(function (data, status) {
            console.log(data);
        })

}]);