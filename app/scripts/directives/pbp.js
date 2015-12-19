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

            function _load_pbp(timeFilter){
                angular.forEach(scope.pbpObj, function(item){
                    var minutes = item.time.minutes;
                    // var seconds = item.time.seconds * 1000;
                    // var additionalMinutes = item.time.additionalMinutes;
                    // var goalTimestamp = minutes + seconds;
                        if (minutes < 45) {
                            if ( minutes.toString() === timeFilter){
                                scope.pbpData.push({'time':item.time, 'playText':item.playText});
                            }
                        }

                });
            }

            setInterval(function(){
                var currentTime =  scope.API.totalTime - scope.API.timeLeft;
                var filterTime = $filter('date')(currentTime, 'm');
                _load_pbp(filterTime);
            }, 5000);


        }
    };
  });
