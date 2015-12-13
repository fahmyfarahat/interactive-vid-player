'use strict';

/**
 * @ngdoc overview
 * @name koraPlayerApp
 * @description
 * # koraPlayerApp
 *
 * Main module of the application.
 */
var modules = [
    'ngRoute',
    'ngSanitize',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
    'ui.bootstrap'
  ];
var app = angular.module('koraPlayerApp', modules);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });