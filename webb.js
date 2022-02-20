window.onload=function(){
	lich();
	nowday();
	selectt();
}
const day= new Date();
var ngay=day.getDate();
var thang=day.getMonth()+1;
function lich(){

	var kk="";
	 var dem=0;
	 var k=7;
	 var ngayam=29;
	 var thangam=11;
	 var nam=2021;
	
	for(var j=1;j<=12;j++)
	{
		var n=0;
	document.querySelector('body').innerHTML=document.querySelector('body').innerHTML+"<div class='lich lich"+j+"'><div onclick='home()'class='logo '><img src='https://cdn.dribbble.com/users/1303230/screenshots/10786710/1anime_avatar_4x.jpg'/></div><div class='album'><div  class='item i1'><img src='https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg'/></div><div class='item i2'><div class='item-child'><img src='https://i.pinimg.com/736x/65/91/e6/6591e6a45ea81657d4f17145ceb4d48f.jpg'/></div><div class='item-child'><img src='https://i.pinimg.com/736x/1a/ef/83/1aef83f1bc9bb2b745fcbcd2dce4ab50.jpg'/></div></div></div><div class='lich-number'><br/><div class='name'><div><center><h3>THÁNG "+j+"/2022</h3></center></div></div><div class='container'><div class='itemss'>CN</div><div class='itemss'>T2</div><div class='itemss'>T3</div><div class='itemss'>T4</div><div class='itemss'>T5</div><div class='itemss'>T6</div><div class='itemss'>T7</div></div></div></div>";
	if(j==1||j==3||j==5||j==7||j==8||j==10||j==12){
		n=31;
	}
	if(j==2){
		n=28;
	}
	if(j==4||j==6||j==9||j==11){
		n=30;
	}


	for(var i=1;i<=42;i++)
	{	

		
		if(i<=n){
			dem++;}
		if(dem>7){
		dem=1;
		}
		
		if(i>=k&&i-k+1<=n){
			
			if(thangam==1||thangam==3||thangam==5||thangam==6||thangam==8||thangam==10){
		m=30;
}
if(thangam==2||thangam==4||thangam==7||thangam==9||thangam==11||thangam==12){
		m=29;
	}
	if(thangam==11&&nam==2021)
	{	m=30;
	}
			
			if(ngayam>m){
				ngayam=1;
			thangam++;
			}
			if(thangam>12){
				thangam=1;
				nam++;
			}
		if(ngayam==1||i==k){
			kk=ngayam+"/"+thangam;
		}
		else{
			kk=ngayam;
		}
		
		document.querySelector('.lich'+j+' .container').innerHTML=document.querySelector('.lich'+j+' .container').innerHTML+"<div onClick='opennote("+(i-k+1)+","+j+",2022)' class='items day"+(i-k+1)+""+j+"'><b>"+(i-k+1)+"</b><p class='am'>"+kk+"</p></div>";
		ngayam++;
	}
		
	else{
		document.querySelector('.lich'+j+' .container').innerHTML=document.querySelector('.lich'+j+' .container').innerHTML+"<div class='items'></div>";
	}
	}
	console.log();
	k=dem;
	
	var n=0;
}
	
	document.querySelector(".day"+ngay+""+thang+"").style.animation="nowa 1s infinite";
	
	
}

function home(){
    window.location="https://hoatuoihoangvu.000webhostapp.com";
}
function nowday(){
	var a=document.querySelector("select").value;
	
	for(var i=1;i<=12;i++)
	{	
		if(a!=0){
			document.querySelector("select").classList.add("sel");
			document.querySelector("body").style.backgroundColor="white";
		}
		else{
			document.querySelector("select").classList.remove("sel");

			document.querySelector("body").style.backgroundColor="black";
		}
	if(i==a){
		document.querySelector(".lich"+i+"").style.display="flex";
	}
		else {document.querySelector(".lich"+i+"").style.display="none";}
		
	}
}
function selectt(){
	for(var i=1;i<=12;i++){
		document.querySelector("select").innerHTML=document.querySelector("select").innerHTML+"<option value='"+i+"'>Tháng "+i+"</option>";
	}
	
	
}
function notecontinue(){
	document.querySelector(".buttonnote button").innerHTML="Lưu";
}
function note(){
var a=document.querySelector(".load");
		document.querySelector(".buttonnote button").innerHTML="loading...";
		document.querySelector(".buttonnote button").disabled=true;
		document.querySelector("textarea").disabled=true;
	
	a.style.width="100%";
	setTimeout(function(){
		document.querySelector("textarea").disabled=false;
		document.querySelector(".buttonnote button").innerHTML="OK";
		document.querySelector(".buttonnote button").style.color="white";
		document.querySelector(".buttonnote button").style.backgroundColor="lightgreen";
		addnote();
		noteitem();
	},2000)
	
	
}
function savenote(){
	var a=document.querySelector(".load");
	document.querySelector(".buttonnote button").innerHTML="Lưu";
		document.querySelector(".buttonnote button").style.color="black";
		document.querySelector(".buttonnote button").style.backgroundColor="white";
			document.querySelector(".buttonnote button").disabled=false;
		a.style.width="0%";
}
function opennote(a,b,c){
		document.querySelector(".note-f").style.display="flex";
		noteitem();
		document.querySelector(".date").innerHTML=""+a+"/"+b+"/"+c+"";
}
function closenote(){
	savenote();
		document.querySelector(".note-f").style.display="none";
		var item=document.querySelectorAll(".note-item");
		for(var i=0;i<item.length;i++){
			item[i].style.width="0%";
			item[i].style.padding="0%";
		}
	document.querySelector("textarea").value="";
		
}
function noteitem(){
	
	var i=0;
	var item=document.querySelectorAll(".note-item");
	var ok=setInterval(function(){
		item[i].style.width="90%";
		item[i].style.padding="2%";
		i++;
		if(i>i.length){
		clearTimeout(ok);
	}
	},200)
	
}
function addnote(){
	var a=document.querySelector("textarea").value;
	document.querySelector(".note-text").innerHTML=document.querySelector(".note-text").innerHTML+'<div class="note-item">'+a+'</div>';
}