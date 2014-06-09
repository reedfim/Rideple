/**
 * module - controllers
 * */

App.controllers
    .controller('NotiListCtrl', ['$scope',
        function ($scope) {
            $scope.title = 'Noti';
            $scope.hideModal = function(){
                $scope.modalNotiList.hide();
            }
        }
    ]);