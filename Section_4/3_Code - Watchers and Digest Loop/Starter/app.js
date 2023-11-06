var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.$watch('handle', (newValue, oldValue) => {
        console.info('Changed!')
        console.info('Old: ' + oldValue)
        console.info('New: ' + newValue)
    })

    setTimeout(() => {
        $scope.$apply(function () {
            $scope.handle = 'newtwitterhandle'
            console.log('Scope Changed!');
        })
    }, 3000);
}]);
