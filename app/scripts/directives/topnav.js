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
        require: '^videogular',
        link: function postLink(scope, element, attrs, API) {

            scope.API = API;           
            scope.$watch('API.currentTime', function(){
                var currentTime = scope.API.currentTime - (1000*12.60);
                var filter = $filter('date')(currentTime, 'mm:ss');
                console.log(filter);
            });
      }
    };
  });
