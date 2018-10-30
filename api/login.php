<?php

require 'connect.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
   // Extract the data.
  $request = json_decode($postdata);
  if(trim($request->data->name) === '' || (int)$request->data->password === '')
  {
    return http_response_code(400);
  }
	$name = mysqli_real_escape_string($con, trim($request->data->name));
  $password = mysqli_real_escape_string($con, $request->data->password);
      
  $response = [];
  $sql = "SELECT `id` FROM `login` WHERE `username`='$name' and `userpwd`='$password'";
 
  if($result = mysqli_query($con,$sql))
  {
    if(mysqli_num_rows ($result )>0){
      while($row = mysqli_fetch_assoc($result))
      {
        $response['name'] =$row['id'];
        $response['password'] = '';
      }
        
      echo json_encode(['data'=>$response]);
    }
    else{
      $response['name'] =0;
      $response['password']=0;
      echo json_encode(['data'=>$response]);
    }
 }
 else
  {
   
    http_response_code(404);
  }
}