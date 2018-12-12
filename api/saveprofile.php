<?php
session_start();
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
 
  $request = json_decode($postdata);
  print_r($request);die;


  // Sanitize.
  $name = mysqli_real_escape_string($con, trim($request->data->name));
  $email = mysqli_real_escape_string($con, $request->data->email);
  $mobile= mysqli_real_escape_string($con, (int)$request->data->phone);
  $pwd= mysqli_real_escape_string($con, $request->data->pwd); 


  $sqlStr = "SELECT uemail FROM `tbuser` where `uemail`='$email'";
   
  if ($result = mysqli_query($con,$sqlStr)){
     $rowcount = mysqli_num_rows($result);
     mysqli_free_result($result);
    
  }
  if($rowcount==0){
  // Store.
  $a=rand(9,99);
	$Cuid=$a.uniqid();
  $sql = "INSERT INTO `tbuser`(`cid`, `uname`, `upwd`, `uphone`, `uemail`, `ulink`) VALUES ('{$Cuid}','{$name}','{$pwd}','{$mobile}','{$email}','')";
 
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $response = [
      'status' => 1,
      'uname' => $name
    ];
    echo json_encode(['data'=>$response]);
  }
  else
  {
    http_response_code(201);
    $response = [
      'status' => 0,
      'uname' => 0
    ];
    echo json_encode(['data'=>$response]);
  }
}
else{
  http_response_code(201);
  $response = [
    'status' => -1,
    'uname' => 0
  ];
  echo json_encode(['data'=>$response]);
}
}