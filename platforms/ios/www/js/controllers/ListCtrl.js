/**
 * module - controllers
 * */

App.controllers
    .controller('ListCtrl', ['$scope','$stateParams','global','$templateCache','Model_list','$ionicModal','$ionicPopup','$ionicSlideBoxDelegate',
        function ($scope, $stateParams, global, $templateCache, Model_list, $ionicModal, $ionicPopup,$ionicSlideBoxDelegate) {
            console.log('ListCtrl');
            var rideType = $stateParams.rideType;
            if(rideType){
                $scope.rideType = rideType;
            }else{
                $scope.rideType = global.getDefaultActType();
            }

            $scope.listData = null;

            Model_list.fetch(function(data){
                $scope.listData = data;
                for(var i=0;i<$scope.listData.plans.length; i++){
                    if($scope.listData.plans[i].contentType === 'CG'){
                        $scope.listData.plans[i].clickCreateGroup = function(){
                            $scope.modalCreateGroup.show();
                        }
                    }
                }
                $scope.plans = $scope.listData.plans;
                $scope.battleResults = $scope.listData.battleResults;
                $scope.feeds = $scope.listData.feeds;

            });
            setTimeout(function(){
                $ionicSlideBoxDelegate.update();
            },300);

            $scope.listRefresh = function(){
                setTimeout(function(){
                    $scope.$broadcast('scroll.refreshComplete');
                },2000);
            }


            var popupConfig = {
                template: '', //templateCache사용
                title: 'Test',
                subTitle: 'subTitle',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            console.log('click')
                        }
                    }
                ]
            };
            var testPopup = null
//            testPopup.then(function(res) {
//                console.log('Tapped!', res);
//            });

            $scope.showPopup = function(){
                testPopup = $ionicPopup.show(popupConfig);
            }

        }
    ]);