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
                scope.pitch = false;


                scope.playerInfo = function(player, e){
                    e.preventDefault();
                    e.stopPropagation();
                    if (scope.isToggled) {
                        scope.pitch = scope.isToggled;
                        // scope.playerPitch.id = scope.players.indexOf(player);
                    }
                    scope.playerPitch = player;

                    console.log(player);
                };      
          }
        };
      });
})();