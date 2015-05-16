'use strict';

/**
 * @ngdoc overview
 * @name cookbookApp
 * @description
 * # cookbookApp
 *
 * Main module of the application.
 */

angular
    .module('cookbookApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        //'ngTouch',
        'directives',
        'ui.bootstrap',
        'wu.masonry',
        'ui.utils'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'views/recipe-list/recipelist.html'
        }).

        when('/add_recipe', {
            templateUrl: '/views/recipe-add/addrecipe.html'
        }).

        when('/recipe_detail/:recipe', {
            templateUrl: '/views/recipe-detail/recipedetail.html'
        }).

        // Error Routes
        when('/error', {
            templateUrl: 'views/error/404.html',
            controller: 'ErrorController'
        }).

        otherwise ({
            redirectTo: '/error'
        });

  });


