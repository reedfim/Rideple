/**
 * module - controllers
 * */

App.controllers
    .controller('ListCtrl', ['$scope','$stateParams','global','$templateCache','TMPL_MAP','listModel','$ionicModal','$ionicPopup',
        function ($scope, $stateParams, global, $templateCache, TMPL_MAP, listModel, $ionicModal, $ionicPopup) {
            console.log('ListCtrl');
            global.makeTemplateCache($templateCache, TMPL_MAP.LIST); //리스트에서 사용할 템플릿들을 캐싱한다.

            var actType = $stateParams.actType;
            if(actType){
                $scope.actType = actType + '▼';
            }else{
                $scope.actType = global.getDefaultActType() + '▼';
            }

            $scope.listData = null;

            listModel.fetch(function(data){
                $scope.listData = data;
                for(var i=0;i<$scope.listData.list.length; i++){
                    if($scope.listData.list[i].contentType === 'CG'){
                        $scope.listData.list[i].clickCreateGroup = function(){
                            console.log(3333);
                            $scope.modalCreateGroup.show();
                        }
                    }
                }
                $scope.contents = $scope.listData.list;

            });


            $ionicModal.fromTemplateUrl('templates/modals/actTypeList.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modalCreateGroup = modal;
            });
//            $scope.clickCreateGroup = function(){
//                console.log('click');
//                $scope.modalCreateGroup.show();
//            }

            // An elaborate, custom popup
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
                    },
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