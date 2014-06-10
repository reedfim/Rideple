/**
 * module - controllers
 * */

App.controllers
    .controller('ListCtrl', ['$scope','$stateParams','global','$templateCache','Model_list','$ionicPopup','$ionicSlideBoxDelegate',
        function ($scope, $stateParams, global, $templateCache, Model_list, $ionicPopup,$ionicSlideBoxDelegate) {
            console.log('ListCtrl');
            var rideType = $stateParams.rideType;
            if(rideType){
                $scope.rideType = rideType;
            }else{
                $scope.rideType = global.getDefaultActType();
            }

            $scope.listData = null;

            var meetSourcePopup = null;
            Model_list.fetch(function(data){
                $scope.listData = data;
                for(var i=0;i<$scope.listData.plans.length; i++){
                    if($scope.listData.plans[i].contentType === 'CM'){
                        $scope.listData.plans[i].showChoiceMeetSourcePopup = function(){
                            meetSourcePopup = $ionicPopup.show({
                                template: $templateCache.get('meetSourcePopup.html'),
                                title: 'Create Meet',
                                scope: $scope
                            });
                        }
                    }
                }
                $scope.plans = $scope.listData.plans;
                $scope.battleResults = $scope.listData.battleResults;
                $scope.feeds = $scope.listData.feeds;

            });

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


            setTimeout(function(){
                $ionicSlideBoxDelegate.update();
            },300);

            $scope.listRefresh = function(){
                setTimeout(function(){
                    $scope.$broadcast('scroll.refreshComplete');
                },2000);
            }

            $scope.showNotiListModal = function(){
                $scope.modalNotiList.show();
            }

        }
    ]);