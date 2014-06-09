/**
 * module - common
 * */
App.common

    .factory('Model_list', function ($http, URLS) {  //일단 단순하게....
        function _fetch(callback){
            $http.get(URLS.list)
                .then(function (result) {
                    console.log(result.data);
                     callback(result.data);
                });
        }


        return {
            fetch : function (callback) {
                _fetch(callback);
            }
        }
    })
    .factory('Model_meetList', function ($http, URLS) {  //일단 단순하게....
        function _fetch(callback){
            $http.get(URLS.meetList)
                .then(function (result) {
                    console.log(result.data);
                    callback(result.data);
                });
        }


        return {
            fetch : function (callback) {
                _fetch(callback);
            }
        }
    })