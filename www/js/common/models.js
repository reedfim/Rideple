/**
 * module - common
 * */
App.common

    .factory('listModel', function ($http, URLS) {  //일단 단순하게....
        function _fetch(callback){
            $http.get(URLS.list)
                .then(function (result) {
                     callback(result.data);
                });
        }


        return {
            fetch : function (callback) {
                _fetch(callback);
            }
        }
    })