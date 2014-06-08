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
        groupList : 'data/groupList.json'
    })
    .constant('FLAG', {

    })
    .constant('TMPL_MAP', {
        LIST : {
            'BR1' : 'battleResult1.html',
            'BR2' : 'battleResult2.html',
            'BB' : 'battleBegin.html',
            'GB' : 'groupBegin.html',
            'GF' : 'groupFinish.html',
            'CG' : 'createGroup.html',
            'DF' : 'defaultFeed.html',
            'PF' : 'photoFeed.html',
            'PFP' : 'photoFeedProgress.html'
        }
    })



;
