var App = angular.module('App', ['ionic', 'App.controllers', 'App.common', 'App.directives']);

App.controllers = angular.module('App.controllers', []);
App.directives = angular.module('App.directives', []);
App.common = angular.module('App.common', []);


App
    .run(function ($ionicPlatform) {
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

        ;

        $urlRouterProvider.otherwise('/app/list');  //기본 값을 localStorage에서 빼온다.
    });
