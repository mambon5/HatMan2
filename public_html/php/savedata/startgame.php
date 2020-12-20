<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">


</head>
hola
<body onload="submitform()">
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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nobjs = $_POST['nobjs'];
        $x = $_POST['x'];
        $y = $_POST['y'];
        $dir = $_POST['dir'];
        $playername = $_POST['playername'];
        $moved = $_POST['moved'];
        $clase = $_POST['clase'];        
        }
        
// I need:
$table = "hatmanchars";

$values = ""; /* array of values to insert into table*/

if ($nobjs<2) {
   $values = "('$playername', $x, $y, $dir, $moved, '$clase')";
} else {
    for ($i = 0; $i < ($nobjs-1) ; $i++) { /* writing down the different inputs and values */
           $values = $values. " ('$playername[i]', $x[i], $y[i], $dir[i], $moved[i], '$clase[i]'),";
        }
    $values = $values. " ('$playername[i]', $x[i], $y[i], $dir[i], $moved[i], '$clase[i]');";    
}

envia un email
envia las variables a una ip.
        
//loading data from 2nd player:
$sql = "INSERT INTO $table (name, x, y, dir, moved, clase)
VALUES $values";

$result = $conn->query($sql);
    
if($result === false) {
  echo "error in starting game with: " . mysqli_error($conn);
}


    $conn->close();
  ?>


</body>
</html> 

