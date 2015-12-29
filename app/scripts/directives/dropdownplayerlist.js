'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:dropdownPlayerList
 * @description
 * # dropdownPlayerList
 */
(function(){
    angular.module('koraPlayerApp')
      .directive('dropdownPlayerList', function () {
        return {
          templateUrl: 'views/directives/dropdown_player_list.html',
          restrict: 'E',
          scope:{
            data:'=',
            isToggled:'=',
            pitch:'=',
            tabName:'@'
          },
          link: function postLink(scope, element, attrs) {
                scope.home = 0;
                scope.away = 1;

                scope.$watch('isToggled', function(){
                    if (!scope.isToggled) {
                        scope.pitch = false;
                    }
                });
                scope.stopEvent = function(e){
                    if (e) {
                        e.preventDefault();
                        e.stopPropagation();  
                    }  
                };
                scope.playerInfo = function(player, e){
                    if (e) {
                        e.preventDefault();
                        e.stopPropagation();  
                    }
                    if (scope.isToggled) {
                        scope.pitch = scope.isToggled;
                    }
                    scope.playerPitch = player;

                    console.log(player);
                };      
          }
        };
      });
})();