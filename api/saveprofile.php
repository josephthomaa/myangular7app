<?php
session_start();

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
 
  $request = json_decode($postdata);
  //print_r($request);die;


  // Sanitize.
  $fname = mysqli_real_escape_string($con, trim($request->data->fname));
  $lname = mysqli_real_escape_string($con, $request->data->lname);
  $address= mysqli_real_escape_string($con, $request->data->address);
  $occupation= mysqli_real_escape_string($con, $request->data->occupation); 
  $email= mysqli_real_escape_string($con, $request->data->email); 
  $id= mysqli_real_escape_string($con, $request->data->id); 
  $phone= mysqli_real_escape_string($con, $request->data->phone); 
  $whatsapp= mysqli_real_escape_string($con, $request->data->whatsapp); 
  $skype= mysqli_real_escape_string($con, $request->data->skype); 
  $imageurl= mysqli_real_escape_string($con, $request->data->imageurl); 
  $comment= mysqli_real_escape_string($con, $request->data->comment); 

  $sqlStr = "SELECT cid FROM `tblprofile` where `cid`='$id'";
   
  if ($result = mysqli_query($con,$sqlStr)){
     $rowcount = mysqli_num_rows($result);
     mysqli_free_result($result);
    
  }
  if($rowcount==0){
  // Store.
  $a=rand(9,99);
	$Cuid=$a.uniqid();
  $sql = "INSERT INTO `tblprofile`(`id`, `cid`, `fname`, `lname`, `address`, `occupation`, `phone`, `email`, `whatsapp`, `skype`, `imageurl`, `intro`) VALUES ('','{$id}','{$fname}','{$lname}','{$address}','{$occupation}','{$phone}','{$email}','{$whatsapp}','{$skype}','{$imageurl}','{$comment}')";
 
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $response = [
      'status' => 1,
      'uname' => $fname
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