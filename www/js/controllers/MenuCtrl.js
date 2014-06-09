/**
 * module - controllers
 * */

App.controllers
    .controller('MenuCtrl', ['$scope',
        function ($scope) {
            var menuList = [];

            menuList.push({
                name : '목록',
                href : '#app/list'
            });
            menuList.push({
                name : '모임목록',
                href : '#app/meetList'
            });
//            menuList.push({
//                name : '내기록',
//                href : '#app/my'
//            });
//            menuList.push({
//                name : '내친구',
//                href : '#app/friends'
//            });
//            menuList.push({
//                name : '설정',
//                href : '#app/setting'
//            });

            $scope.menuList = menuList;
        }

    ]);
