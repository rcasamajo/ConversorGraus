/**
 * Created by rcasamajo on 21/01/16.
 */

app.controller('myController', function($scope) {
    $scope.cel = 0;
    $scope.far = 32;

    $scope.toFarenheit = function() {
        $scope.far = ($scope.cel*1.8)+32;
    };

    $scope.toCelcious = function() {
        $scope.cel = ($scope.far-32)/1.8;
    };
});