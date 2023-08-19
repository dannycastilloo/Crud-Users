angular.module('MainApp',[]);

function principalController($scope,$http) {
    $scope.areas = {};
    $scope.newArea = {};

    $http.get('/api/areas').success(function(data) {
        $scope.areas = data;
    }).error(function(data) {
        console.log('Error:' + data);
    });

    // Add new area
    $scope.registerArea = function() {
        $http.post('/api/area', $scope.newArea)
            .success(function(data) {
                $scope.newArea = {}; // delete form data
                $scope.areas = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Get the table selected object
    $scope.selectArea = function(area) {
        $scope.newArea  = area;
        $scope.selected = true;
        console.log( $scope.newArea, $scope.selected );
    };

    // Update area
    $scope.updateArea = function(newArea) {
        $http.put('/api/area/' + $scope.newArea._id, $scope.newArea)
            .success(function(data) {
                $scope.newArea  = {};
                $scope.areas    = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Delete area
    $scope.deleteArea = function(newArea) {
        $http.delete('/api/area' + $scope.newArea._id)
        .success(function(data) {
            $scope.newArea  = {};
            $scope.areas    = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
}