'use strict';

/**
 * @ngdoc function
 * @name koraPlayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the koraPlayerApp
 */

(function(){
    function controller (scope , $sce){

        scope.config = {
            autoHide: true,
            autoHideTime: 3000,
            autoPlay: false,
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
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
            poster: ""
            }
        };
    }

angular.module('koraPlayerApp')
  .controller('MainCtrl', ['$scope','$sce', controller]);
})();