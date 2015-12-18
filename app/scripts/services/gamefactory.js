'use strict';

/**
 * @ngdoc service
 * @name koraPlayerApp.gameFactory
 * @description
 * # gameFactory
 * Factory in the koraPlayerApp.
 */
(function(){
    function factory($http){
        var gameFactory = {};

        gameFactory.loadMatch = function(){
            return $http.get('scripts/Juv-Fio-ar.json');
        };
        return gameFactory;
    }
    angular.module('koraPlayerApp')
      .factory('gameFactory', [ '$http', factory]);
})();