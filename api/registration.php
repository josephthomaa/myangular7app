<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
 // print_r($request);die;

  // Validate.
  if(trim($request->data->name) === '' || (int)$request->data->password === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $name = mysqli_real_escape_string($con, trim($request->data->name));
  $uname = mysqli_real_escape_string($con, $request->data->uname);
  $mobile= mysqli_real_escape_string($con, (int)$request->data->mobile);
  $pwd= mysqli_real_escape_string($con, $request->data->password); 

  // Store.
  $sql = "INSERT INTO `login`(`username`,`userpwd`,`name`,`mobile`) VALUES ('{$uname}','{$pwd}','{$name}','{$mobile}')";
 
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $response = [
      'status' => 1,
      'uname' => $uname
    ];
    echo json_encode(['data'=>$response]);
  }
  else
  {
    http_response_code(422);
    $response = [
      'status' => 0,
      'uname' => 0
    ];
    echo json_encode(['data'=>$response]);
  }
}