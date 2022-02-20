
function login2(a){
	var name=document.querySelector(".uphinh").files;
	const xhttp= new XMLHttpRequest();
	const data= new FormData();
	data.append("file",name[0]);
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
	     login(this.responseText);
		}
	}
	xhttp.open("POST","upload.php?a="+a+"&&b="+localStorage.getItem('id-user')+"");
	xhttp.send(data);
	}
function editBackground(){
	var name=document.querySelector(".new-background input").files[0];
	document.querySelector(".new-background img").src=URL.createObjectURL(name);

	}
	function editAvatar(){
	var name=document.querySelector(".new-avatar input").files[0];
	document.querySelector(".new-avatar img").src=URL.createObjectURL(name);

	}
	function closeEdit(){
		document.querySelector(".edituser").style.display="none";
		document.querySelector("body").style.overflowY="auto";
	}
	function openEdit(){
		document.querySelector(".new-avatar img").src=document.querySelector(".avatar-main img").src;
		document.querySelector(".new-background img").src=document.querySelector(".background-img").src;
		document.querySelector(".edituser").style.display="flex";
		document.querySelector("body").style.overflowY="hidden";
	}
function upp(){
	var name=document.querySelector(".uphinh").files[0];
	document.querySelector(".upload img").src=URL.createObjectURL(name);
	document.querySelector(".upload").style.transform='scale(1.5) translateY(20px)';
	 document.querySelector(".upload img").style.display="block";
	}

function sendd(){
    var name="";
    	var a=".ok";
     let s=document.querySelector(".content-i").value;
    if(document.querySelector(".uphinh").value!=""){
         name=URL.createObjectURL(document.querySelector(".uphinh").files[0]);
    }
     if(document.querySelector(".uphinh").value==""&&s=="")
    {alert("chưa có thông tin kìa!")}
    else{
        login2(s);
     
       
   document.querySelector(".content-i").value="";
    document.querySelector(".uphinh").value="";
    document.querySelector(".upload img").removeAttribute('src');
     document.querySelector(".upload img").style.display="none";
     document.querySelector(".upload").style.transform='scale(1) ';
	}

	

    
}
function loadimg(){
	const xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
			 const array=this.responseText.split(',')
	document.querySelector(".avatar-main img").src="img/"+array[0]+"";
	document.querySelector(".background-img").src="img/"+array[1]+"";
		if (typeof(Storage) !== "undefined") {
		localStorage.setItem("avatar",""+array[0]+"");}
		}
	}
	xhttp.open("POST","loaditem.php?b="+localStorage.getItem('id-user')+"");
	xhttp.send();
	
}
function sendUpdateUser(){
   
     var a=document.querySelector(".new-background input").files;
	 var c=document.querySelector(".new-avatar input").files;
	 var i=document.querySelector(".new-background input").value;
	 var y=document.querySelector(".new-background input").value;
	
	const xhttp= new XMLHttpRequest();
	const data= new FormData();
	data.append("file1",a[0]);
	data.append("file2",c[0]);
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
	     closeEdit();
		 i="";
		 y="";
		 
		 loadcontentuser();
		 setTimeout(loadcontent,200);
		 loadcontent();
		 
		}
	}
	xhttp.open("POST","updateuser.php?b="+localStorage.getItem('id-user')+"");
	xhttp.send(data);
	
	}

function loaduser(){
    const xhttp= new XMLHttpRequest();
	const data= new FormData();
	data.append("file",name[0]);
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
			document.querySelector(".list-people").innerHTML=this.responseText;
		}
	}
	xhttp.open("POST","load.php");
	xhttp.send();
}
    
    function loadcontent(){
		var a=document.querySelectorAll('.avatar img');
		var b=document.querySelectorAll('.newss');
		for(var i=0;i<b.length;i++){
			b[i].src="img/"+localStorage.getItem('avatar');
		}
		for(var i=0;i<a.length;i++){
			a[i].src="img/"+localStorage.getItem('avatar');
		}
		
    const xhttp= new XMLHttpRequest();
	const data= new FormData();
	data.append("file",name[0]);
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
			document.querySelector(".news-container").innerHTML=this.responseText;
		}
	}
	xhttp.open("POST","loadcontent.php");
	xhttp.send();
}
function login(e){
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
	loadcontent();
	},6200);
  
}	
    function loadcontentuser(){
		 loadimg();
    const xhttp= new XMLHttpRequest();
	const data= new FormData();
	data.append("file",name[0]);
	xhttp.onreadystatechange= function(){
		if(this.readyState==4&&this.status==200){
			document.querySelector(".content-user").innerHTML=this.responseText;
		}
	}
	xhttp.open("POST","loadcontentuser.php?a="+localStorage.getItem('id-user')+"");
	xhttp.send();
}
	function scrolll(){
		var a=document.querySelectorAll('.item-content');
		for(var i=0;i<a.length;i++){
		if(a[i].getBoundingClientRect().top>window.innerHeight-150){
			a[i].classList.add('scrolla');
		}
		else{
			a[i].classList.remove('scrolla');
		}
		}
	}