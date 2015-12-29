'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:formattion
 * @description
 * # formattion
 */
angular.module('koraPlayerApp')
  .directive('formattion', function () {
    return {
        templateUrl: 'views/directives/formattion.html',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {

        }
    };
  });
