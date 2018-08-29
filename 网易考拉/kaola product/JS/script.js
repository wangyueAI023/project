window.onload = function(){


var oBtn1=document.getElementById('btn1')
var oBtn2=document.getElementById('btn2')
var oMsg=document.getElementById('msg')
var i=1;

oBtn1.onclick=function(){
	if(i>0){
	i -=1;
	oMsg.value=i;
	console.log(oMsg.value);
}else if(i<=0){
	oMsg.value="0";
}
	
}

oBtn2.onclick=function(){
	oMsg.value="";
	i +=1;
	oMsg.value=i;
	console.log(oMsg.value);
}
}