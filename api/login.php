<?php
session_id(uniqid()); 
session_start();
date_default_timezone_set('America/Los_Angeles');
$current_time = date('Y-m-d H:i:s');
$_SESSION["user_info"] = null;
$_SESSION['start'] = time(); // Taking now logged in time.
$_SESSION['expire'] = $_SESSION['start'] + (30* 60);
require 'connect.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
   // Extract the data.
  $request = json_decode($postdata);
  
  if(trim($request->data->email) === '' || $request->data->pwd === '')
  {
    return http_response_code(400);
  }
  
	$email = mysqli_real_escape_string($con, $request->data->email);
  $password = mysqli_real_escape_string($con, $request->data->pwd);
      
  $response = [];
  $sql = "SELECT `cid` FROM `tbuser` WHERE `uemail`='$email' and `upwd`='$password'";
 
  if($result = mysqli_query($con,$sql))
  {
    if(mysqli_num_rows ($result )>0){
      while($row = mysqli_fetch_assoc($result))
      {
        $response['name'] =$row['cid'];
        $response['password'] = '';
        $_SESSION["user_info"] = $row['cid'];
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
   
    http_response_code(400);
  }
}