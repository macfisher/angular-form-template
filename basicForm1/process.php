<?php
//process.php

$errors = array(); //array to hold validation errors
$data = array();   //array to pass back data

//validate the variables
if (empty($_POST['name'])) {
	$errors['name'] = "Name is required.";
}

if (empty($_POST['superheroAlias'])) {
	$errors['superheroAlias'] = "Alias is required.";
}

//return response
//respond if errors occur
if (!empty($errors)) {
	//if items exist in error array, return those
	$data['success'] = false;
	$data['errors'] = $errors;
} else {
	//if no errors, return a message
	$data['success'] = true;
	$data['message'] = "Success.";
}

//return data to AJAX response as JSON data
echo json_encode($data);
