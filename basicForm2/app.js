//app.js

//create Angular app
var validationApp = angular.module('validationApp', []);

//create Angular controller
validationApp.controller('mainController', function($scope) {
	//function to submit the form after all validation has occurred
	$scope.submitForm = function(isValid) {
		//check to make sure the form is completely valid
		if (isValid) {
			alert('Our form is VALID');
		}
		
		//store submitted variable as true as soon as form is submitted
		$scope.submitted = true;
	};
});
