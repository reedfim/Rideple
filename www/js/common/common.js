/**
 * module - common
 * */
App.common

    .factory('global', function(){
        var defaultActType = 'Cycle';

        return {
            getDefaultActType : function(){
                return defaultActType;
            },
            makeTemplateCache : function(tmplCache, dataMap){
                for(key in dataMap){
                    if(dataMap.hasOwnProperty(key)){
                        //console.log(dataMap[key],document.getElementById(dataMap[key]));
                        tmplCache.put(dataMap[key], document.getElementById(dataMap[key]).text);
                    }
                }
            }
        }
    })
    .service('messageHub', ['$rootScope', function($rootScope){

        this.sendMessageToListCtrl = function(data){
            $rootScope.$broadcast('');
        };
    }])
    .constant('URLS', {
        list : 'data/list.json',
        meetList : 'data/meetList.json'
    })
    .constant('FLAG', {

    })
    .constant('TMPL_MAP', {
        LIST : {
            'BR1' : 'battleResult1.html',
            'BR2' : 'battleResult2.html',
            'BB' : 'battleBegin.html',
            'MB' : 'meetBegin.html',
            'MF' : 'meetFinish.html',
            'CM' : 'createMeet.html',
            'DF' : 'defaultFeed.html',
            'PF' : 'photoFeed.html',
            'PFP' : 'photoFeedProgress.html'
        },
        POPUP : {
            'MSP' : 'meetSourcePopup.html'
        }
    })



;
