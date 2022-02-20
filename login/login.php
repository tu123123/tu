<?php
include 'connect.php';
$conn= mysqli_connect($server,$name,$password,$db);
$query="insert into user (id,pass,sdt,gmail,name) values ('".$_GET['a']."','".$_GET['b']."','".$_GET['d']."','".$_GET['c']."','".$_GET['e']."')";
if (mysqli_query($conn,$query)) {
   echo".ok";
}
else{echo ".no";}

mysqli_close($conn);
?>