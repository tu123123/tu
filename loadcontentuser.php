<?php
include'connect.php';
$conn= mysqli_connect($server,$name,$password,$db);
$query="select * from content,user where user.id=content.userid and user.id='".$_GET['a']."'  ORDER BY time ASC";
$result = mysqli_query($conn, $query);
$kq="";
$style="";
if (mysqli_num_rows($result) > 0) {
    while($row=mysqli_fetch_assoc($result)){
        if($row['img']=="")
        {
            $style="hidden";
        }
        else{
            $style="";
        }
        $kq='<div class="item-content">
	<div class=av>
	<div class="avatar"><img  src="img/'.$row['avatar'].'"/></div>
	<p class="nameuser">'.$row['name'].'</p>
	</div>
	<div>
    '.$row['content'].'
	</div>
	<img class="img" '. $style.' style="height:auto;width:auto;object-fit:cover" src="upload/'.$row['img'].'"/>
	</div>'.$kq;
    }
      echo $kq; 
    }
else {
   
}?>