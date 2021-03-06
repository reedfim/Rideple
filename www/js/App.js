var App = angular.module('App', ['ionic', 'App.controllers', 'App.common', 'App.directives']);

App.controllers = angular.module('App.controllers', []);
App.directives = angular.module('App.directives', []);
App.common = angular.module('App.common', []);


App
    .run(function ($ionicPlatform, $templateCache, TMPL_MAP, global, $timeout) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        global.makeTemplateCache($templateCache, TMPL_MAP.LIST); //리스트에서 사용할 템플릿들을 캐싱한다.
        global.makeTemplateCache($templateCache, TMPL_MAP.POPUP); //팝업에서 사용할 템플릿들을 캐싱한다.

        $timeout(function(){
            document.getElementById('splashWrapper').style.display = 'none';
        }, 3000);


        $.getJSON( "https://www.strava.com/api/v3/athlete/activities?access_token=b4d832b3c9deb2bdec0cb0d317f159ef19997e17&callback=?", function (results) {
            console.log(results);
        });
        $.getJSON( "https://www.strava.com/api/v3/activities/86593098?access_token=b4d832b3c9deb2bdec0cb0d317f159ef19997e17&callback=?", function (results) {
            console.log(results);
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.list', {
                url: '/list',
                views: {
                    'contents': {
                        templateUrl: 'templates/pageviews/list.html',
                        controller : 'ListCtrl'
                    }
                }
            })
            .state('app.meetList', {
                url: '/meetList',
                views: {
                    'contents': {
                        templateUrl: 'templates/pageviews/meetList.html',
                        controller : 'MeetListCtrl'
                    }
                }
            })
            .state('app.friends', {
                url: '/friends',
                views: {
                    'contents': {
                        templateUrl: 'templates/pageviews/friends.html',
                        controller : 'FriendsCtrl'
                    }
                }
            })
            .state('app.test', {
                url : '/test',
                views : {
                    'contents' : {
                        templateUrl : 'templates/modals/createMeet.html'
                    }
                }
            })

        ;

        $urlRouterProvider.otherwise('/app/list');  //기본 값을 localStorage에서 빼온다.
    });
