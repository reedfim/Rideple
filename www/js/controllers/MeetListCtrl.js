/**
 * module - controllers
 * */

App.controllers
    .controller('MeetListCtrl', ['$scope','Model_meetList','$ionicPopup','$templateCache',
        function ($scope, Model_meetList, $ionicPopup, $templateCache) {

            Model_meetList.fetch(function(data){
                $scope.listData = data;
                $scope.meets = $scope.listData.meets;

            });

            $scope.listRefresh = function(){
                setTimeout(function(){
                    $scope.$broadcast('scroll.refreshComplete');
                },2000);
            }

            var meetSourcePopup = null;
            $scope.showChoiceMeetSourcePopup = function(){
                meetSourcePopup = $ionicPopup.show({
                    template: $templateCache.get('meetSourcePopup.html'),
                    title: 'Create Meet',
                    scope: $scope
                });
            }

            $scope.clickSelectRecord = function(){
                if(meetSourcePopup){
                    meetSourcePopup.close();
                }
                $scope.modalCreateMeet.show();
            };
            $scope.clickDirectInput = function(){
                if(meetSourcePopup){
                    meetSourcePopup.close();
                }
                $scope.modalCreateMeet.show();
            };
        }
    ]);