var App = angular.module('App', ['ionic', 'App.controllers', 'App.common']);

App.controllers = angular.module('App.controllers', []);
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
                        templateUrl: 'templates/pageviews/list/__all.html',
                        controller : 'ListCtrl'
                    }
                }
            })

        ;

        $urlRouterProvider.otherwise('/app/list');
    });


App.controllers
    .controller('AppCtrl', function(){
        console.log('Abstract Main App Controller');
    });