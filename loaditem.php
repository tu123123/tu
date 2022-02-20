<?php
include'connect.php';
$conn= mysqli_connect($server,$name,$password,$db);
$query="select * from user where id='".$_GET['b']."'";
$result = mysqli_query($conn, $query);
$kq="";
$style="";
if (mysqli_num_rows($result) > 0) {
    while($row=mysqli_fetch_assoc($result)){
      $kq=$row['avatar'].",".$row['background'];
    }
      echo $kq; 
    }
else {
   
}?>