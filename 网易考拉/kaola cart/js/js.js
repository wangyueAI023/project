window.onload = function(){
var oBtn1 = document.getElementById("btn1");
var oBtn2 = document.getElementById("btn2");
var oMsg1 = document.getElementById("msg1");
var oBtn3 = document.getElementById("btn3");
var oBtn4 = document.getElementById("btn4");
var oMsg2 = document.getElementById("msg2");
var oMoney1 = document.getElementById("money1");
var oMoney2 = document.getElementById("money2");
var oAccounts = document.getElementById("accounts");
var oAmount = document.getElementById("amount");


var i = 1;
var n = 1;
oAccounts.innerHTML = (i*2588.00) + (n*1885.00)+".00";
oAmount.innerHTML = parseInt(oMsg1.value)+parseInt(oMsg2.value);
oBtn1.onclick=function(){
	if(i>1){
	i -=1;
	oMsg1.value=i;
	oMoney1.innerText = i*2588.00+".00";
	oAccounts.innerHTML = (i*2588.00) +   parseInt(oMoney2.innerText) +".00";
	oAmount.innerHTML = parseInt(oMsg1.value)+parseInt(oMsg2.value);
	console.log(oMsg1.value);
	console.log(oMoney1.innerText);
}else if(i<=1){
	oMsg1.value="1";
}	
}
oBtn2.onclick=function(){
	oMsg1.value="";
	i +=1;
	oMsg1.value=i;
	oMoney1.innerText = i*2588.00+".00";
	oAccounts.innerHTML = (i*2588.00) +  parseInt(oMoney2.innerText)+".00";
	oAmount.innerHTML = parseInt(oMsg1.value)+parseInt(oMsg2.value);
	console.log(oMsg1.value);
	console.log(oMoney1.innerText);
}
oBtn3.onclick=function(){
	if(n>1){
	n -=1;
	oMsg2.value=n;
	oMoney2.innerText = n*1885.00+".00";
	oAccounts.innerHTML =  parseInt(oMoney1.innerText) + (n*1885.00)+".00";
	oAmount.innerHTML = parseInt(oMsg1.value)+parseInt(oMsg2.value);
	console.log(oMsg2.value);
}else if(n<=1){
	oMsg2.value="1";
}	
}
oBtn4.onclick=function(){
	oMsg2.value="";
	n +=1;
	oMsg2.value=n;
	oMoney2.innerText = n*1885.00+".00";
	oAccounts.innerHTML =  parseInt(oMoney1.innerText) + (n*1885.00)+".00";
	oAmount.innerHTML = parseInt(oMsg1.value)+parseInt(oMsg2.value);
	console.log(oMsg2.value);
}
}
