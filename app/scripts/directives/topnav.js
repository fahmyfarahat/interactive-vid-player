'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:topnav
 * @description
 * # topnav
 */
angular.module('koraPlayerApp')
  .directive('topNav', function ($filter) {
    return {
        templateUrl: 'views/directives/top_nav.html',
        restrict: 'E',
        scope:{
            periodDetails:'='
        },
        require: '^videogular',
        link: function postLink(scope, element, attrs, API) {
            scope.teamResult = {
                'homeScore':0,
                'awayScore':0
            };
            
            function _loadGoals(){
                angular.forEach(scope.periodDetails, function(period){
                    angular.forEach(period.goals, function(goal){
                        var minutes = goal.time.minutes ;
                        var seconds = goal.time.seconds;
                        var additionalMinutes = goal.time.additionalMinutes;
                        var goalTimestamp = minutes + additionalMinutes+':'+''+seconds;
                        if (goalTimestamp ===  scope.timeFilter) {
                            scope.teamResult =  goal.currentScore;
                        }
                    });
                });

            }

            scope.API = API;
             // console.log(scope.API.currentTime);
            scope.$watch('API.currentTime', function(){
                scope.currentTime = scope.API.currentTime - (1000*12.60);
                scope.timeFilter = $filter('date')(scope.currentTime, 'm:ss');
                _loadGoals();
            });

      }
    };
  });
