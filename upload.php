<?php
date_default_timezone_set('Asia/Ho_Chi_Minh');
if(move_uploaded_file($_FILES['file']['tmp_name'],'upload/'.$_FILES['file']['name'])){
	
}
?>

<?php
include 'connect.php';
$conn= mysqli_connect($server,$name,$password,$db);

$query="insert into content (id,userid,content,img,likenumber,time) values ('".rand(0,10000)."','".$_GET['b']."','".$_GET['a']."','".$_FILES['file']['name']."','222',NOW())";
if (mysqli_query($conn,$query)) {
   echo".ok";
}
else{echo ".no";}

mysqli_close($conn);
?>
