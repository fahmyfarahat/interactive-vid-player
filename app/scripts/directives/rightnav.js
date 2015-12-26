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
            scope.taps = [{
                name:'التشكيله',
                icon:'formattion',
                status:false
            },{
                name:'البدلاء',
                icon:'bench',
                status:false
            },{
                name:'الاحصائيات',
                icon:'statistics',
                status:false
            },{
                name:'خطط اللعب',
                icon:'plan',
                status:false
            },{
                name:'مناطق اللعب',
                icon:'playing-areas',
                status:false
            }];
            
            scope.toggled = function(open){
                scope.pitch = false;
                scope.isToggled = open;
            };
            console.log('vid API: ',API);
            scope.API = API;


          }
        };
      });
})();