window.onload=function(){
        var img = document.getElementById("pic");
        var timeout, rotate = 0;
        function startAnim() {
            timeout = setInterval(function () {
                var rotateStyle = "rotate(" + rotate + "deg)";
                img.style.transform = rotateStyle;
 
                rotate += 1;
                if (rotate > 360) {
                    rotate = 0;
                }
            }, 30);
        }
        function stopAnim() {
            clearInterval(timeout);
            timeout = null;
        }
 
        startAnim();

}

