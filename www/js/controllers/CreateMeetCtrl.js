/**
 * module - controllers
 * */

App.controllers
    .controller('CreateMeetCtrl', ['$scope','$ionicPopup','$timeout','$ionicActionSheet',
        function ($scope, $ionicPopup, $timeout, $ionicActionSheet) {
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

            $scope.rideType = 'Type';
            $scope.private = 'private';
            $scope.distanceList = [10,11,12,13,14,15,16,17,18,19,20];


            $scope.changeType = function(){
                var buttons = [
                    { text: 'Cycle <i class="type-ride" data-type="cycle"></i>', type: 'Cycle' },
                    { text: 'MTB <i class="type-ride" data-type="mtb"></i>', type: 'MTB' },
                    { text: 'TouringBike <i class="type-ride" data-type="tb"></i>', type: 'TouringBike' },
                    { text: 'Walk <i class="type-ride" data-type="walk"></i>', type: 'Walk' },
                    { text: 'Run <i class="type-ride" data-type="run"></i>', type: 'Run' },
                    { text: 'Hike <i class="type-ride" data-type="hike"></i>', type: 'Hike' }
                ];
                $ionicActionSheet.show({
                    titleText: 'type',
                    buttons: buttons,
                    cancelText: 'Cancel',
                    cancel: function() {
                        console.log('CANCELLED');
                    },
                    buttonClicked: function(index) {
                        $scope.rideType = buttons[index].type;
                        return true;
                    }
                });
            };
            $scope.changePrivate = function(){
                var buttons = [
                    { text: 'Public', type: 'Public' },
                    { text: 'Private', type: 'Private' }
                ];
                $ionicActionSheet.show({
                    titleText: 'private',
                    buttons: buttons,
                    cancelText: 'Cancel',
                    cancel: function() {
                        console.log('CANCELLED');
                    },
                    buttonClicked: function(index) {
                        $scope.private = buttons[index].type;
                        return true;
                    }
                });
            }

        }
    ]);