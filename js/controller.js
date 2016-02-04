/**
 * Created by rcasamajo on 04/02/16.
 */

app.controller('WebCalcController', function($scope) {
    $scope.res = 0;
    $scope.nums = [1, 4, 7];

    $scope.numClick = function() {
        $scope.res = 1000;
    };
});