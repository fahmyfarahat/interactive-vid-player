'use strict';

/**
 * @ngdoc directive
 * @name koraPlayerApp.directive:formattion
 * @description
 * # formattion
 */
angular.module('koraPlayerApp')
.directive('pitchPlayerFormattion', function () {
  return {
      template: '<div id="formation_pitch"></div>',
      restrict: 'E',
      scope:{
          playerData:'=',
          idSelector:'@'
      },
      link: function postLink(scope, element, attrs) {   

          var scaleh = d3.scale.linear();
          var scalev = d3.scale.linear();
          var width = 250;
          var height = 125;
          var selector = '#'+ scope.idSelector;
          var pitch = d3.select(selector);
              pitch.append("svg")
              .attr("width", width)
              .attr("height", height)
              .style("background", "url(images/pitch.svg) no-repeat center center / contain");
              d3.xml("images/pitch.svg", function(){
                  d3.select("svg"), 
                  d3.select("defs");
                  scaleh.domain([0, width]);
                  scaleh.range([0, 668]);
                  scalev.domain([0, height]);
                  scalev.range([0, 808]);
                  _setPositions(scope.playerData);
                  
              });
              // if (scope.playerData) {
              //     scope.$watch('playerData', function(){

              //         // console.log('playerData ', scope.playerData);
                      
              //         // _setCoordinates(scope.playerData.fieldCoordinates);
              //         _setFormation(scope.playerData);
              //     });
              // }

              function _setPositions(event){
                  var formattionHome = event.teams[1].formation;
                  var formattionAway = event.teams[0].formation;
                  var playerList = [];
                  var home = 0;
                  var away = 1;
                  $.getJSON("scripts/" + formattionHome + ".json",function(playerHome) {
                      for (var f = 0; f < playerHome.positions.length; f++){
                          playerHome.positions[f].number = event.box_scores[home].players[f].player.uniform;
                          playerHome.positions[f].name = event.box_scores[home].players[f].player.displayName;
                          playerHome.positions[f].position = event.box_scores[home].players[f].position.name;
                          playerHome.positions[f].color = '#c53441';//event.teams[home].teamColors.primary;
                          playerHome.positions[f].x = parseInt(playerHome.positions[f].x); 
                          playerHome.positions[f].y = parseInt(playerHome.positions[f].y); 
                      }
                      $.getJSON("scripts/" + formattionAway + ".json",function(playerAway) {
                          for (var f = 0; f < playerAway.positions.length; f++){
                              playerAway.positions[f].number = event.box_scores[away].players[f].player.uniform;
                              playerAway.positions[f].name = event.box_scores[away].players[f].player.displayName;
                              playerAway.positions[f].position = event.box_scores[away].players[f].position.name;
                              playerAway.positions[f].color = '#fff';//event.teams[away].teamColors.primary;
                              playerAway.positions[f].x = width - playerAway.positions[f].x; 
                              playerAway.positions[f].y = parseInt(playerAway.positions[f].y);
                          }
                          playerList = playerHome.positions.concat(playerAway.positions);
                          _setFormation(playerList);
                      });
                  });
              }

              function _setFormation(players){
                  d3.select(selector)
                      .select("svg")
                      .selectAll("*")
                      .remove(); 
                  var pitch = d3.select(selector)
                      .select("svg")
                      .selectAll(".node");
                  pitch.data(players)
                      .enter()
                      .append("g")
                      .attr("class", "node")
                      .style("pointer-events", "all")
                      .append("circle")
                      .attr("cx", function(a) {
                          return a.x;
                      })
                      .attr("cy", function(a) {
                          return a.y;
                      })
                      .attr("r", 6)
                      .style("fill", function(a){
                          return a.color;
                      })

                      .attr("class", "text-pointer player-position")
                      .attr("data-toggle", "tooltip")
                      .attr("data-placement", "top")
                      .attr("data-container", "body")
                      .attr("data-html", "true")
                      .attr("title", function(a) {
                          return "<strong>" + a.name +
                              "</strong><br /><small>" + a.position +
                              "</small>";
                      })
                      .style("opacity", "0.7")
                      .style("stroke", "rgba(0,0,0,0.5)")
                      .style("stroke-width", "1");

                      d3.select(selector)
                      .select("svg")
                      .selectAll(".node")
                      .data(players)
                      .append("text")
                      .text(function(a) {
                          return a.number;
                      })
                      .attr("x", function(a) {
                          return a.x;
                      })
                      .attr("y", function(a) {
                          return a.y;
                      })
                      .style("font-family", "sans-serif")
                      .style("font-size", "6px")
                      .style("text-anchor", "middle")
                      .style("dominant-baseline", "central")
                      .style("pointer-events", "none");
                      _tooltip();
              }

              function _tooltip(){
                  $('[data-toggle="tooltip"]')
                      .tooltip();
              }

              // function _setCoordinates(c){
              //     d3.selectAll("g")
              //     .remove();
              //     d3.select("#pitch_player svg")
              //         // .enter()
              //         .append("g")
              //         .attr("class", "node")
              //         .style("pointer-events", "all")
              //         .append('circle')
              //         .attr('cx', (c.x * width / 100) - 10)
              //         .attr('cy', (c.y * height / 100) + 15)
              //         .attr('r', 5)
              //         .style("opacity", "0.8")
              //         .style("stroke", "rgba(0,0,0,0.2)")
              //         .style("stroke-width", "1")
              //         .style("fill","#c53441");
              // }
    }
  };
});