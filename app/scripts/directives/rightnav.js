'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:rightNav
 * @description
 * # rightNav
 */
(function(){
    angular.module('koraPlayerApp')
      .directive('rightNav', function () {
        return {
          templateUrl: 'views/directives/right_nav.html',
          restrict: 'E',
          scope:{
            events:'='
          },
          require: '^videogular',
          link: function postLink(scope, element, attrs, API) {
            scope.home = 0;
            scope.away = 1;
            scope.taps = [{
                name:'التشكيله',
                icon:'formattion',
            },{
                name:'البدلاء',
                icon:'bench'
            },{
                name:'خطط اللعب',
                icon:'plan'
            },{
                name:'الاحصائيات',
                icon:'statistics'
            },{
                name:'مناطق اللعب',
                icon:'playing-areas'
            }];

            console.log('vid API: ',API);
            scope.API = API;
            scope.pitch = false;
            scope.isopen = false;
            scope.$watch('isopen', function(){
                scope.pitch = scope.isopen;
            });
            scope.toggled = function(open){
                scope.pitch = false;
                scope.isToggled = open;
            };
            scope.playerInfo = function(player, e){
                e.preventDefault();
                e.stopPropagation();
                if (scope.isToggled) {
                    scope.pitch = scope.isToggled;
                    scope.playerPitch = player;
                    // scope.playerPitch.id = scope.players.indexOf(player);
                }

                console.log(player,  scope.isopen);
            };

          }
        };
      });
})();