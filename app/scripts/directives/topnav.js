'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:topnav
 * @description
 * # topnav
 */
angular.module('koraPlayerApp')
  .directive('topNav', function () {
    return {
        templateUrl: 'views/directives/top_nav.html',
        restrict: 'E',
        require: '^videogular',
        link: function postLink(scope, element, attrs, API) {

            scope.API = API;           
            scope.$watch('API.currentState', function(){
                console.log(scope.API.currentState);
            });
      }
    };
  });
