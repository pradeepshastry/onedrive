'use strict';

angular.module('myApp.view1', ['ngRoute'])
.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.launchOneDrivePicker = function(){
        var odOptions = {
            clientId: "54c44c3c-7426-4e7e-85f9-113107cd22a0",
            action: "download",
            advanced: {
                redirectUri: "http://localhost:8000/app/index.html#/view2"
            },
            success: function(files) { /* success handler */ },
            cancel: function() { /* cancel handler */ },
            error: function(e) { /* error handler */ }
        }
        OneDrive.open(odOptions);
    }
}]);