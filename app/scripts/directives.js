'use strict';


var app = angular.module('directives', []);
app.directive('headerPanel', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/shared/header.html'
	};
});

app.directive('footerPanel', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/shared/footer.html'
	};
});


// Recipe List Card Directive
app.directive('recipeCard', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/recipe-list/recipecard.html'
	};
});


// Recipe Detail Directives
app.directive('recipeDetail', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/recipe-detail/recipe.html'
	};
});

app.directive('reviewForm', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/recipe-detail/reviewform.html'
	};
});


