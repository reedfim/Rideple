/**
 * module - controllers
 * */

App.controllers
    .controller('AppCtrl', ['$scope','$state','$ionicModal',
        function ($scope, $state, $ionicModal) {
            console.log('Abstract Main App Controller');

            //Modal View Setting.
            $ionicModal.fromTemplateUrl('templates/modals/rideTypeList.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modalRideType = modal;
            });

            $ionicModal.fromTemplateUrl('templates/modals/createMeet.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modalCreateMeet = modal;
            });

            $ionicModal.fromTemplateUrl('templates/modals/notiList.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modalNotiList = modal;
            });

            $scope.clickHeader = function(){
                var curUrl = $state.current.url;
                if(curUrl.indexOf('/list') > -1){
                    console.log(curUrl, $state);
                    //$scope.modalActType.show();
                }
            }
        }
    ]);