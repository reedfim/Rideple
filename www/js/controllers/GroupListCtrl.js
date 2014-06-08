/**
 * module - controllers
 * */

App.controllers
    .controller('GroupListCtrl', ['$scope','Model_groupList',
        function ($scope, Model_groupList) {

            Model_groupList.fetch(function(data){
                $scope.listData = data;
                $scope.groups = $scope.listData.groups;

            });

            $scope.listRefresh = function(){
                setTimeout(function(){
                    $scope.$broadcast('scroll.refreshComplete');
                },2000);
            }

            $scope.clickCreateGroup = function(){
                $scope.modalCreateGroup.show();
            }
        }
    ]);