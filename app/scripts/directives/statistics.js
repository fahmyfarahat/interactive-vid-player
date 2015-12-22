'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:statistics
 * @description
 * # statistics
 */
angular.module('koraPlayerApp')
  .directive('statistics', function () {
    return {
        templateUrl: 'views/directives/statistics.html',
        restrict: 'E',
        link: function postLink(scope, element, attrs, API) {
            scope.$watch('isToggled', function(){
                if (!scope.isToggled) {
                    scope.pitch = false;
                    scope.playerListContainer = false;
                }
            });
            console.log('scope.events', scope.events.box_scores[0].players[0])
            scope.playerInfo = function(player, e){
                e.preventDefault();
                e.stopPropagation();
                if (scope.isToggled) {
                    scope.pitch = scope.isToggled;
                }
            };
            scope.playerList = function(g, e){
                e.preventDefault();
                e.stopPropagation();
                if (scope.isToggled) {
                    scope.playerListContainer = scope.isToggled;
                }
            };
        }   
    };
  });
