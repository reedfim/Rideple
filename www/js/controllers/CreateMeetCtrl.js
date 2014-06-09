/**
 * module - controllers
 * */

App.controllers
    .controller('CreateMeetCtrl', ['$scope','$ionicPopup','$timeout',
        function ($scope, $ionicPopup, $timeout) {
            $scope.title = "Create";
            $scope.complete = function(){
                var alertPopup = $ionicPopup.alert({
                    title: '경고',
                    template: '현재 작업중입니다.'
                });
                $timeout(function() {
                    alertPopup.close();
                }, 1000);
            }
            $scope.hideModal = function(){
                $scope.modalCreateMeet.hide();
            }
        }
    ]);