<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">


</head>
hola
<body >
<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


include("../connect.php");//contains all passwords.
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

        
// I need:
$table = "hatmanchars";

//loading data from 2nd player:
$sql = "TRUNCATE TABLE $table";    
$result = $conn->query($sql);
    
if($result === false) {
  echo "error in deleting table $table in : " . mysqli_error($conn);
}


    $conn->close();
  ?>


</body>
</html> 

