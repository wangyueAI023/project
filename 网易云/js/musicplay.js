var oMain = document.getElementsByTagName("main")[0];
var oPic = document.getElementById("pic");
(function(){
    oPic.style.height = oMain.style.height = window.screen.height/2 + "px";
    //oPic.style.marginTop = (oMain.style.height - oPic.style.height)/2 + "px";
})()