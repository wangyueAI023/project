//window.onload = function(){
/*----------------------------------- 控制滚动条----------------------------------------------- */
   var mo=function(e){e.preventDefault();};
    function stop(){
            document.body.style.overflow='hidden';        
            document.addEventListener("touchmove",mo,false);//禁止页面滑动
    }
    //取消滑动限制
    function move(){
            document.body.style.overflow='';//出现滚动条
            document.removeEventListener("touchmove",mo,false);        
    }; 
/*----------------------------------- 点击出现设置选项----------------------------------------------- */
    //alert();
    var oBtn = document.getElementById("btn");
    var oAside = document.getElementById("aside");
    var oMain = document.getElementById("main");
    var oMask = document.getElementById("mask");
    //console.log(oBtn);
    oBtn.onclick = function(){
        oAside.style.display = "block";
        oAside.style.height = window.screen.height + "px"; 
        oMask.style.display = "block";
        oMask.style.height = window.screen.height + "px";
        stop(oMain);
    }
    oMask.onclick = function(){
        oAside.style.display = "none";
        oMask.style.display = "none";
        move(oMain)
    }
//}