/**
 * Created by rcasamajo on 21/01/16.
 */

app.controller('myController', function($scope) {
    $scope.cel = 0;
    $scope.far = 32;
    $scope.dir = "toF";

    $scope.calc = function() {
        if ($scope.dir == "toF") {
            $scope.far = ($scope.cel * 1.8) + 32;
        }
        else {
            $scope.cel = ($scope.far - 32) / 1.8;
        }
    };
});