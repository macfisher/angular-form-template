//app.js
var formApp = angular.module('formApp', [])
	.controller('formController', function($scope) {
		//store form data in this object
		$scope.formData = {};
	});
