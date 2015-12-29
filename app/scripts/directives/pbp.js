'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:pbp
 * @description
 * # pbp
 */
angular.module('koraPlayerApp')
  .directive('pbp', function ($filter) {
    return {
        templateUrl: 'views/directives/pbp.html',
        restrict: 'E',
        require: '^videogular',
        scope:{
            pbpObj:'='
        },
        link: function postLink(scope, element, attrs, API) {
            scope.pbpData = [];
            scope.API = API;
            scope.$watch('API.currentState', function(){
                var _interval = null;
                    _interval = setInterval(function(){
                        if (scope.API.currentState === 'play') {
                          // console.log('iam',scope.API.currentState, scope.API.currentState === 'play');
                            var lastPbP = {'time': scope.pbpObj[0].time, 'playText': scope.pbpObj[0].playText};
                            scope.pbpData.push(lastPbP);
                            scope.pbpObj.shift();
                        } else {
                            clearInterval(_interval);
                        }
                        console.log(_interval);
                        
                    }, 60000);
                    // clearInterval();        
            });

            // function _load_pbp(min){
            //     angular.forEach(scope.pbpObj, function(item){
            //         var minutes = item.time.minutes;
            //         var seconds = item.time.seconds;
            //         // var additionalMinutes = item.time.additionalMinutes;
            //         var goalTimestamp = minutes+':'+seconds;
            //         // console.log('goalTimestamp ',goalTimestamp);
            //         if (minutes < 5) {
            //             if (goalTimestamp.toString() === min){
            //                 var index = scope.pbpData.indexOf({'time':item.time, 'playText':item.playText});
            //                 console.log('index', index);
            //                 scope.pbpData.push({'time':item.time, 'playText':item.playText});
            //             }
            //         }

            //     });
            // }

            // scope.$watch('API.currentTime', function(){
            //     // var currentTime =  scope.API.totalTime - scope.API.timeLeft;
            //     // var min = $filter('date')(currentTime, 'm:s');
            //     // var sec = $filter('date')(currentTime, 's');
            //     // console.log('time  ',min, sec);
            //     var currentTime = scope.API.currentTime - (1000*12.60);
            //     var timeFilter = $filter('date')(currentTime, 'm:ss');
            //     _load_pbp(timeFilter);
            // });



        }
    };
  });
