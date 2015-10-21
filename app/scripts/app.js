'use strict';

angular
  .module('KayakApp', [
    'as.sortable',
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($urlRouterProvider,$stateProvider) {

    $urlRouterProvider.otherwise("/list");
    $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "views/list.html",
      controller: 'MianCtrl'
    })
    .state('list.details', {
      url: "/details",
      templateUrl: "views/details.html",
      controller: 'MianCtrl'
    });
    
  }).
  run(['$rootScope', '$state',
      function($rootScope, $state) {
        $rootScope.$state = $state;
  }

]);

