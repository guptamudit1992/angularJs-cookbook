'use strict';

/**
 * @ngdoc function
 * @name cookbookApp.controller:AddRecipeController
 * @description
 * # AddRecipeController
 * Controller of the cookbookApp
 */

angular.module('cookbookApp')
  .controller('AddRecipeController', ['$scope', 'dataFactory', function ($scope, dataFactory) {

  	$scope.submitform = function() {
  		var formData = {
          	'author' : $scope.recipe.author,
          	'title' : $scope.recipe.title,
          	'imageURL' : $scope.recipe.imageURL,
            'description' : $scope.recipe.description,
            'comments_detail': [ ],
          	'date' : new Date()
        };

        $scope.recipe = {};
        dataFactory.postRecipe(formData);
        
        $window.location.href = '#/';
  	};

 }]);
