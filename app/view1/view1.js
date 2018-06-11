'use strict';

angular.module('myApp.view1', ['ngRoute'])
.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.launchOneDrivePicker = function(){
        var odOptions = {
            clientId: "54c44c3c-7426-4e7e-85f9-113107cd22a0",
            action: "download",
            advanced: {
                redirectUri: "https://pradeepshastry.github.io/onedrive/app/index.html"
            },
            success: function(files) {
                console.log('Success Pradeep');
                console.log(files)
            },
            cancel: function() { /* cancel handler */ },
            error: function(e) { /* error handler */ }
        }
        OneDrive.open(odOptions);
    }
}]);