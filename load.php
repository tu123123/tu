<?php
include 'connect.php';
$conn= mysqli_connect($server,$name,$password,$db);
$query="select * from user";
$result = mysqli_query($conn, $query);
$kq="";
if (mysqli_num_rows($result) > 0) {
    while($row=mysqli_fetch_assoc($result)){
        $kq=$kq.'<div class="list-i"><img class="background"src="background.jpg"/>
	<div class=avl>
	<div class="avatar"><img src="https://yt3.ggpht.com/ytc/AKedOLRAIbph_gdGzZ9tOuxxzrWJYHGXFLbBXDUVz6HE2w=s900-c-k-c0x00ffffff-no-rj"/></div>
	<div class="p"><p>'.$row['name'].'</p></div>
	</div>
	<button>Thêm</button>
	</div>';
    }
      echo $kq; 
    }
else {
    echo ".no";
}?>