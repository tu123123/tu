<?php
include 'connect.php';
$conn= mysqli_connect($server,$name,$password,$db);
$query="select * from user where id='".$_GET['a']."' and pass='".$_GET['b']."'";
	
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    while($row=mysqli_fetch_assoc($result)){
         echo ".ok,".$row['name'].",".$row['id']."";
    }
       
    }
else {
    echo ".no";
}
?>