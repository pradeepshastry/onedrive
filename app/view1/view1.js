'use strict';

angular.module('myApp.view1', ['ngRoute'])
.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.launchOneDrivePicker = function(){
        var odOptions = {
            // clientId: "df5a2538-00b8-4663-b1b5-62df4b7fa9d0",
            clientId: "54c44c3c-7426-4e7e-85f9-113107cd22a0",
            action: "share",
            advanced: {
                redirectUri: "https://pradeepshastry.github.io/onedrive/app/index.html",
                // redirectUri: "http://localhost:4000/app",
                createLinkParameters: { type: "edit", scope: "organization" },
            },
            success: function(files) {
                console.log('Success Pradeep');
                $scope.response = files;
                console.log(files)
                $scope.$apply();
            },
            cancel: function() { /* cancel handler */ },
            error: function(e) {
                console.log('errored on pradeep-',e);
                $scope.errMessage = 'OneDrive upload was not successful. ' + e.message;
                $scope.$apply();
            }
        }
        OneDrive.open(odOptions);
    }
}]);