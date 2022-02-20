
<?php
date_default_timezone_set('Asia/Ho_Chi_Minh');
if(move_uploaded_file($_FILES['file1']['tmp_name'],'img/'.$_FILES['file1']['name'])){
	
}
if(move_uploaded_file($_FILES['file2']['tmp_name'],'img/'.$_FILES['file2']['name'])){
	
}
?>
<?php
include 'connect.php';
$conn= mysqli_connect($server,$name,$password,$db);
if($_FILES['file1']){
	$query="update user set background='".$_FILES['file1']['name']."' where id='".$_GET['b']."'";
}
if($_FILES['file2']){
	$query="update user set avatar='".$_FILES['file2']['name']."' where id='".$_GET['b']."'";
}
if($_FILES['file1']&&$_FILES['file2'])
$query="update user set avatar='".$_FILES['file2']['name']."',background='".$_FILES['file1']['name']."' where id='".$_GET['b']."'";
if (mysqli_query($conn,$query)) {
   echo"đổi thành công";
}
else{echo "Không thành công";}

mysqli_close($conn);
?>
