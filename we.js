function a(){
	document.querySelector(".chat-container").style.height="0";
}
function closee(){
	document.querySelector(".chat-form").style.display="none";
}
function chat(){
	document.querySelector(".chat-container").style.height="400px";
	document.querySelector(".chat-form").style.display="block";
}
function Home(){
	document.querySelector(".container").style.display="flex";
	document.querySelector(".content-main").style.display="none";
	document.querySelector(".list-people").style.display="none";
}
function mainpage(){
	document.querySelector(".container").style.display="none";
	document.querySelector(".content-main").style.display="flex";
	document.querySelector(".list-people").style.display="none";
	loadcontentuser();
}
function people(){
	document.querySelector(".container").style.display="none";
	document.querySelector(".content-main").style.display="none";
	document.querySelector(".list-people").style.display="flex";
}
function closeop(){
	document.querySelector(".option").style.width="0%";
	
}
function lich(){
   window.location="web.html";
}
function loginn(){
   window.location="login/login.html";
}
window.onload=function(){
	 scrolll();
    loaduser();
    loadcontent();
	if (typeof(Storage) !== "undefined") {
	if(localStorage.getItem("user")||localStorage.getItem("user")==""){
	    if(!window.matchMedia("(max-width: 860px)").matches){
	         
		document.querySelector(".dangnhap").style.display="flex";
		document.querySelector(".dangnhap2").style.display="none";
			
				document.querySelector(".create").style.display="flex";
					document.querySelector(".listF").style.display="flex";
					document.querySelector(".mynews").style.display="block";
						document.querySelector(".list").style.display="flex";
		
		var y=document.querySelectorAll(".nameuser")
		for(var i=0;i<y.length;i++){
			y[i].innerHTML=localStorage.getItem("user");
		}
		document.querySelector(".fai").style.display="block";
	}
	else{
	      
	         
		document.querySelector(".dangnhap").style.display="flex";
		document.querySelector(".dangnhap2").style.display="none";
			
				document.querySelector(".create").style.display="flex";
					document.querySelector(".listF").style.display="none";
					document.querySelector(".mynews").style.display="block";
						document.querySelector(".list").style.display="none";
		
		var y=document.querySelectorAll(".nameuser")
		for(var i=0;i<y.length;i++){
			y[i].innerHTML=localStorage.getItem("user");
		}
		document.querySelector(".fai").style.display="block";
	}
	    }
	   
	else{	document.querySelector(".dangnhap").style.display="none";
				document.querySelector(".create").style.display="none";
			document.querySelector(".dangnhap2").style.display="flex";
		
	}
	}
}
function option(){
	if(document.querySelector(".option").style.width=="300px"){
		document.querySelector(".option").style.width="0px";
	}
	else{
		document.querySelector(".option").style.width="300px";
	}
	
}
function logout(){
	localStorage.removeItem("user");
	localStorage.removeItem('id-user');
	localStorage.removeItem('avatar');
	location.reload();
	
}