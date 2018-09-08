window.onload = function(){
var oBtn1 = document.getElementById('btn1');
var oBtn2 = document.getElementById('btn2');
var oMsg = document.getElementById('msg');

var i=1;
oBtn1.onclick=function(){
	if(i>1){
	i -=1;
	oMsg.value=i;
	console.log(oMsg.value);
	}else if(i<=1){
		oMsg.value="1";
	}	
}

oBtn2.onclick=function(){
	oMsg.value="";
	i +=1;
	oMsg.value=i;
	console.log(oMsg.value);
}
//头部固定
window.onscroll = function() {
	var title = document.getElementsByClassName('P_nav')[0];
    var topScroll = document.documentElement.scrollTop;
    console.log(topScroll);
	if(topScroll>1140 && topScroll<13431){
		title.style.position = "fixed";
		title.style.top = "0";
		title.style.zIndex = "99";
	}else if(topScroll>13431){
		title.style.position = "static";
	}else{
		title.style.position = "static";
	}
}

}