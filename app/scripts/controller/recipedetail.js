'use strict';

/**
 * @ngdoc function
 * @name cookbookApp.controller:RecipeDetailController
 * @description
 * # RecipeDetailController
 * Controller of the cookbookApp
 */

angular.module('cookbookApp')
  .controller('RecipeDetailController', ['$scope', '$location', 'dataFactory', function ($scope, $location, dataFactory) {

        var id = $location.path().split('/')[2];
        var recipe = dataFactory.getRecipe(id);                   // Fetch data for slug
        recipe = dataFactory.calculateRating(recipe);

        $scope.recipe = recipe;


        $scope.submitform = function() {
            var formData = {
                'author' : $scope.review.author,
                'comment' : $scope.review.comment,
                'rating' : $scope.review.rating
            };

            $scope.review = {};
            dataFactory.postReview(formData, id);
        };


        // Defined for review system
        $scope.range = function(min, max, step){
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) input.push(i);
            return input;
        };
 }]);