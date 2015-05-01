//app.js
var formApp = angular.module('formApp', [])
	.controller('formController', function($scope) {
		//mock API sample data
		var users = [
			{
				name: 'Mac',
				email: ''
			},
			{
				name: 'Mui',
				email: ''
			}
		];
		
		//assign this data to an obj. to store all form data
		$scope.formData = {};
		$scope.formData.users = users;
	});
