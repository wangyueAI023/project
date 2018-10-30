window.onload = function(){
	var list = document.getElementsByClassName("watch");
	var oInput = document.getElementsByTagName("input");
	new Vue({
		el:"#app",
		data:{
			//默认总价
			money: 0,
			//默认总数量
			num: 0,
			//					购物车假数据

			list:[
                {
                    name:"【黑卡96折】Apple Watch Series 3智能手表 38mm （GPS款)",
					money:"2588.00",
					num: 1,
					selected: false,

                },
                {
                    name:"【黑卡96折】Apple Watch Series 3智能手表 38mm （GPS款)",
					money:"2588.00",
					num: 1,
					selected: false,
                },
                {
                    name:"【黑卡96折】Apple Watch Series 3智能手表 38mm （GPS款)",
					money:"2588.00",
					num: 1,
					selected: false,
                },
                {
                    name:"【黑卡96折】Apple Watch Series 3智能手表 38mm （GPS款)",
					money:"2588.00",
					num: 1,
					selected: false,
                },
			],

			checked:[],
		},
		//初始化加载   显示总价总数量
		created: function() {
			var price = 0;
			var numb = 0;
			var list = this.list;
			for(var i = 0; i < list.length; i++) {
				if(list[i].selected) {
					price += list[i].num * list[i].money;
					numb += list[i].num;
				}
			}
			this.money = price;
			this.num = numb;
			console.log(numb);
			console.log(price);
		},
		methods: {
			//总价总数量方法   方便调用   再次多写了一次[可以跟初始化封装为一个方法]
			hh: function() {
				var price = 0;
				var numb = 0;
				var list = this.list;
				for(var i = 0; i < list.length; i++) {
					if(list[i].selected) {
						price += list[i].num * list[i].money;
						numb += list[i].num;
					}
				}
				this.money = price;
				this.num = numb;
				console.log(numb);
			},
			//删除购物车列表
			delerte: function(index) {
				this.list.splice(index, 1);
			},
			//删除所有
			delAll(){
                let arr = this.list.filter((val, index)=>{
                    if(this.checked.includes(index)){
                        return val
                    }
				})
				this.checked=[];
				this.money = 0;
				this.num = 0;
                this.list = arr;
				this.selected = false;
				console.log(arr)
            },
			//选中未选中
			radios: function(index) {
				var list = this.list;
				list[index].selected = !list[index].selected;
				this.hh();
				console.log(list[index].selected)
			},
			//添加
			btn_add: function(index) {
				var list = this.list;
				var num = list[index].num;
				num = num + 1;
				list[index].num = num;
				this.hh();
			},
			//减去
			btn_minute: function(index) {
				var list = this.list;
				var num = list[index].num;
				if(num > 1) {
					num = num - 1;
					list[index].num = num;
				}
				this.hh();
			},
			//全选
			sel(){
				for(let i = 0; i < oInput.length; i++) {
					if(oInput[i].type == "checkbox"){
						console.log("==>"+oInput[i].checked)
						oInput[i].checked = true;
					}	
				}
			},
		}
	})











/* var oBtn1 = document.getElementById("btn1");
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
} */
}
