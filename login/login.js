function dangky(){
	document.querySelector(".dangky-f").style.display="flex";
	document.querySelector(".login-f").style.display="none";
}
window.onload=function(){
    if(localStorage.getItem("user")){
      location.href="https://hoatuoihoangvu.000webhostapp.com";
    }
}
function dangnhap(){
	document.querySelector(".dangky-f").style.display="none";
	document.querySelector(".login-f").style.display="flex";
}
function dangkyok(e){
	
	document.querySelector(""+e+"").style.display="flex";
	document.querySelector(".loading").style.display="flex";
	document.querySelector(""+e+"").classList.add('loadingg');
	
	 document.querySelector(""+e+"").classList.remove('loading2');
	setTimeout(function(){
		
		 document.querySelector(""+e+"").classList.remove('loadingg');
		document.querySelector(""+e+"").classList.add('loading2');
			document.querySelector(""+e+"").style.transform="scale(1)";
		document.querySelector(""+e+" img").style.transform="scale(1)";
	},3000);
		setTimeout(function(){
		    document.querySelector(""+e+" img").style.transform="scale(0)";
	
		document.querySelector(""+e+"").style.transform="scale(0)";
	},5000);
	setTimeout(function(){
       	document.querySelector(""+e+"").style.display="none"; 
		document.querySelector(".loading").style.display="none";
		if(e==".ok"){dangnhap();}
	},6200);
}
function login(e,b){
	document.querySelector(".loading").style.display="flex";
	document.querySelector(""+e+"").style.display="flex";
	document.querySelector(""+e+"").classList.add('loadingg');
	 document.querySelector(""+e+"").classList.remove('loading2');
	setTimeout(function(){
		 document.querySelector(""+e+"").classList.remove('loadingg');
		document.querySelector(""+e+"").classList.add('loading2');
			document.querySelector(""+e+"").style.transform="scale(1)";
		document.querySelector(""+e+" img").style.transform="scale(1)";
	},3000);
		setTimeout(function(){
		    document.querySelector(""+e+" img").style.transform="scale(0)";
	
		document.querySelector(""+e+"").style.transform="scale(0)";
	},5000);
	setTimeout(function(){
     document.querySelector(""+e+"").style.display="none";  	
	document.querySelector(".loading").style.display="none";
	if(e==".ok"){
		if (typeof(Storage) !== "undefined") {
		localStorage.setItem("user",""+b+"");}
		
		else{
			window.console.error("aaaaaaaaaa");
		}
		window.location="../index.html";}

	},6200);
  
}

function dangky2(){
	var dem=0;
	var dk=document.querySelectorAll(".dk");
	for(var i=0;i<dk.length;i++){
		dk[i].classList.remove("err");
		if(dk[i].value=="")
		{
			dk[i].classList.add("err");
			dem=1;
		}
	}
	if(dem==0){
	    var name=document.querySelector(".name").value;
	var id=document.querySelector(".username").value;
	var pass=document.querySelector(".userpass").value;
	var sdt=document.querySelector(".sdt").value;
	var gmail=document.querySelector(".gmail").value;
	const xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
			dangkyok(this.responseText);
		}
	}
	xhttp.open("GET","login.php?a="+id+"&&b="+pass+"&&c="+gmail+"&&d="+sdt+"&&e="+name+"");
	xhttp.send();}
	setTimeout(function(){
		for(var i=0;i<dk.length;i++){
		
		dk[i].classList.remove("err");
		
	}
	},1000)
	
}

function login2(){
	
	var dem=0;
	var dk=document.querySelectorAll(".dn");
	for(var i=0;i<dk.length;i++){
		
		if(dk[i].value=="")
		{
			dk[i].classList.add("err");
			dem=1;
		}
	}
	
	if(dem==0){
	var name=document.querySelector(".username1").value;
	var pass=document.querySelector(".userpass1").value;
	const xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
		    
		    const array=this.responseText.split(',')
			login(array[0],array[1]);
		    localStorage.setItem("id-user",array[2])
		}
	}
	xhttp.open("GET","dangnhap.php?a="+name+"&&b="+pass+"");
	xhttp.send();}
	
	setTimeout(function(){
		for(var i=0;i<dk.length;i++){
		
		dk[i].classList.remove("err");
		
	}
	},1000)

	}
	