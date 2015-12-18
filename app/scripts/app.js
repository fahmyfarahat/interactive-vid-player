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
    "ui.bootstrap",
    "ngScrollbars"
  ];
var app = angular.module('koraPlayerApp', modules);
  app.config(function ($routeProvider, ScrollBarsProvider) {
    ScrollBarsProvider.defaults = {
        scrollButtons: {
            scrollAmount: 'auto', // scroll amount when button pressed
            enable: false // enable scrolling buttons by default
        },
        theme: 'dark',
        axis: 'y' // enable 2 axis scrollbars by default
    };
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