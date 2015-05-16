'use strict';

/**
 * @ngdoc function
 * @name cookbookApp.controller:RecipeListController
 * @description
 * # RecipeListController
 * Controller of the cookbookApp
 */

angular.module('cookbookApp')
  .controller('RecipeListController', ['$scope', 'dataFactory', function ($scope, dataFactory) {

  	var data = dataFactory.getRecipeList();

  	var count = data["recipes"].length;
  	var recipes = [];

  	for(var i=0; i<count; i++) {
  		var temp = {};
	  	temp = dataFactory.calculateRating(data["recipes"][i]);
  		recipes.push(temp);
	}

  	$scope.recipes = recipes;

  	

  	// Derfined for review system
  	$scope.range = function(min, max, step){
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) input.push(i);
	    return input;
	};

 }]);