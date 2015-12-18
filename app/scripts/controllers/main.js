'use strict';

/**
 * @ngdoc function
 * @name koraPlayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the koraPlayerApp
 */

(function(){
    function controller (scope , $sce, Game){


        function _loadGame(){
            Game.loadMatch().success(function(res){
                var response = res.apiResults[0].league;
                var leagueName = response.name;
                scope.events = response.season.eventType[0].events[0];
                scope.pbpObj = scope.events.pbp.reverse();
                console.log('pbpObj: ', scope.pbpObj);
                console.log('events: ', scope.events);
            });
        }
        _loadGame();
        scope.status = {
            'pbpIsOpen':false,
        };
        scope.config = {
            "controls": false,
            "loop": false,
            "autoplay": true,
            "startTime": -1,
            "virtualClipDuration": -1,
            "preload": "auto",
            sources: [
                {src: $sce.trustAsResourceUrl("../../vid/match-vid.mp4"), type: "video/mp4"},
                // {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                // {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
            ],
            tracks: [
                {
                    src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
                }
            ],
            // theme:{
            //     url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            // },

            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                "controls": {
                  "autoHide": true,
                  "autoHideTime": 1000
                },
                poster: ""
            },
            scrollbars:{
                autoHideScrollbar: false,
                theme: 'light',
                setHeight: 230,
                scrollInertia: 0,
                advanced:{
                    updateOnContentResize: true
                },
            }
        };
    }

angular.module('koraPlayerApp')
  .controller('MainCtrl', ['$scope','$sce', 'gameFactory', controller]);
})();