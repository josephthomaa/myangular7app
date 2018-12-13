<?php
$id=$_GET['id'];

require 'connect.php';

$profile = [];
$sql = "SELECT `fname`, `lname`, `address`, `occupation`, `phone`, `email`, `whatsapp`, `skype`, `imageurl`, `intro` FROM `tblprofile` WHERE `cid`='$id'";

if($result = mysqli_query($con,$sql))
{
 
  while($row = mysqli_fetch_assoc($result))
  {
    $profile['fname']    = $row['fname'];
    $profile['lname'] = $row['lname'];
    $profile['address'] = $row['address'];
    $profile['occupation'] = $row['occupation'];
    $profile['phone']    = $row['phone'];
    $profile['email'] = $row['email'];
    $profile['whatsapp'] = $row['whatsapp'];
    $profile['skype'] = $row['skype'];
    $profile['imageurl']    = $row['imageurl'];
    $profile['intro'] = $row['intro'];
   
  }
   echo json_encode(['data'=>$profile]);
}
else
{
  http_response_code(404);
}