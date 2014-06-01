/**
 * module - controllers
 * */

App.controllers
    .controller('AppCtrl', ['$scope','$state','$ionicModal',
        function ($scope, $state, $ionicModal) {
            console.log('Abstract Main App Controller');

            //Modal View Setting.
            $ionicModal.fromTemplateUrl('templates/modals/actTypeList.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modalActType = modal;
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