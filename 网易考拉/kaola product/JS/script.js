window.onload = function(){
var oBtn1 = document.getElementById('btn1');
var oBtn2 = document.getElementById('btn2');
var oMsg = document.getElementById('msg');
//结算
var i=1;
oBtn1.onclick=function(){
	if(i>1){
	i -=1;
	oMsg.value=i;
	//console.log(oMsg.value);
	}else if(i<=1){
		oMsg.value="1";
	}	
}

oBtn2.onclick=function(){
	oMsg.value="";
	i +=1;
	oMsg.value=i;
	//console.log(oMsg.value);
}
//头部固定
window.onscroll = function() {
	var title = document.getElementsByClassName('P_nav')[0];
    var topScroll = document.documentElement.scrollTop;
    //console.log(topScroll);
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
//放大镜
var oDrag = document.getElementById("drag");
var oMask = document.getElementById("mask");//遮罩层
var oBig = document.getElementById("big");
var oBigImg = oBig.getElementsByTagName("img")[0];
oMask.onmousemove = function(ev){
    var e = ev || window.event;
    //使鼠标在oDrag中正中位置.
    var left = e.clientX - oDrag.offsetWidth; 
	var top = e.clientY - oDrag.offsetHeight;  
	//console.log(oDrag.offsetWidth)
	
    //oDrag只能在OMask的范围内移动
    if(left<0) left=0;
    if(top<0) top=0;
    var maxX = oMask.offsetWidth - oDrag.offsetWidth;
    var maxY = oMask.offsetHeight - oDrag.offsetHeight;
    if(left>maxX) left = maxX;
    if(top>maxY) top = maxY;

    oDrag.style.left = left+"px";
    oDrag.style.top = top+"px";
	//console.log(oDrag.style.left);
    //大图和小图 实现等比例
    var scaleX = left/maxX;
    var scaleY = top/maxY;
    oBigImg.style.left = -(oBigImg.offsetWidth - oBig.offsetWidth)*scaleX+"px";
	oBigImg.style.top = -(oBigImg.offsetHeight - oBig.offsetHeight)*scaleY+"px";	
}
oMask.onmouseover = function(){
    oBig.style.display = "block";
    oDrag.style.display = "block";
}
oMask.onmouseout = function(){
    oBig.style.display = "none";
    oDrag.style.display = "none";
}
/* 换图片 */
var  oLeft = document.getElementById("left");
var  oRight = document.getElementById("right");
var  oUl = document.getElementById("ul");
var  oLi = oUl.getElementsByTagName("li");
var oSmall = document.getElementById("small");
var oSmall_oImg = oSmall.getElementsByTagName("img")[0];

//console.log(oLi);
/* 点击换图片 */
oUl.addEventListener("click",function(e){
		//console.log(e.target);
		oSmall_oImg.src = e.target.src;
		//console.log(oSmall_oImg);
},false)
/* 点击左右换图片 */
oUl.innerHTML += oUl.innerHTML;
oUl.style.width = oUl.offsetWidth*2+'px';

//if(-oUl.offsetLeft >=oUl.offsetWidth/2) oUl.style.left = 0;
//if(oUl.offsetLeft >0) oUl.style.left = -oUl.offsetWidth/2+'px';

oLeft.onclick  = function(){
/* 	var i = 0;
	i++;
	console.log(i); */
	for(var i = 0;i<oLi.length;i++){
		console.log(i);	
		//oUl.style.transform += "translate(-"+i*100+"px)";
		
	}
}
oRight.onclick  = function(){
	for(var i = 0;i<oLi.length;i++){
		console.log(i);	
		oUl.style.transform += "translate("+i*100+"px)";
	}
}
}