'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:pitchPlayer
 * @description
 * # pitchPlayer
 */
angular.module('koraPlayerApp')
  .directive('pitchPlayer', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {   

            // var scaleh = d3.scale.linear();
            // var scalev = d3.scale.linear();
            var width = 250;
            var height = 125;
            var pitch = d3.select("#pitch_player");
                pitch.append("svg")
                .attr("width", width)
                .attr("height", height)
                .style("background", "url(images/pitch.svg) no-repeat center center / contain");
                if (scope.playerPitch) {
                    scope.$watch('playerPitch', function(){
                        d3.selectAll("g")
                        .remove();
                        _setCoordinates(scope.playerPitch.fieldCoordinates);
                    });
                }

                function _setCoordinates(c){
                    d3.select("#pitch_player svg")
                        // .enter()
                        .append("g")
                        .attr("class", "node")
                        .style("pointer-events", "all")
                        .append('circle')
                        .attr('cx', (c.x * width / 100) - 10)
                        .attr('cy', (c.y * height / 100) + 15)
                        .attr('r', 5)
                        .style("opacity", "0.8")
                        .style("stroke", "rgba(0,0,0,0.2)")
                        .style("stroke-width", "1")
                        .style("fill","#c53441");
                }
      }
    };
  });
