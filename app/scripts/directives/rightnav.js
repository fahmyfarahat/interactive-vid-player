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
          require: '^videogular',
          link: function postLink(scope, element, attrs, API) {
            console.log(API);
            scope.API = API;

          }
        };
      });
})();