//app.js
var formApp = angular.module('formApp', [])
	.controller('formController', function($scope) {
		//mock API sample data
		var users = [
			{
				name: 'Mac',
				email: 'macfisher01@gmail.com'
			},
			{
				name: 'Mui',
				email: 'bkkforlife@hotmail.com'
			}
		];
		
		//assign this data to an obj. to store all form data
		$scope.formData = {};
		$scope.formData.users = users;
	});
