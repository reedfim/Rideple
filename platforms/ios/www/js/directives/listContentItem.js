/**
 * module - directives
 * */

App.directives
    .directive('listContentItem', ['$compile','TMPL_MAP','$templateCache',
        function ($compile, TMPL_MAP, $templateCache) {
            var listTemplateMap = TMPL_MAP.LIST;

            var getTemplate = function(contentType) {
                var template = '';

                if(contentType){
                    template = $templateCache.get(listTemplateMap[contentType]);
                }

                return template;
            }

            var linker = function (scope, element, attrs) {
                console.log(element);
                element.html(getTemplate(scope.content.contentType)); //.show() <- jquery 정식버전을 넣으면 해결될 듯;
                $compile(element.contents())(scope);
            }

            return {
                restrict: "E",
                replace: false,
                transclude : true,
                link: linker,
                scope: {
                    content: '='
                }
            };
        }]);