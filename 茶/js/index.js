window.onload = function(){
    /* 导航点击效果 */
    (function(){
        var oNavList = document.getElementById('navList').getElementsByTagName('li');
        console.log(oNavList);
        for(let i = 0;i<oNavList.length;i++){
            oNavList[i].onclick = function(){
                for(let j = 0;j<oNavList.length;j++){
                    oNavList[j].className='';
                    console.log(j);
                }
                oNavList[i].className='onclickstyle4';
            }
        }
    })();
    /* 茶叶分类点击效果 */
    (function(){
        var oTea = document.getElementById('tea').getElementsByTagName('p');
        //console.log(oTea);
        for(let i = 0;i<oTea.length;i++){
            oTea[i].onmouseover = function(){
                //alert(i);
                oTea[i].className='onclickstyle1';
            }
            oTea[i].onmouseout = function(){
                //alert(i);
                oTea[i].className='';
            }
        }
    })()  ;
    /* 图片点击效果 + Li划过效果 */ 
    (function(){
        var oPic = document.getElementById('pic').getElementsByTagName('li');
        var oPiclist = document.getElementById('picList').getElementsByTagName('li');
        //console.log(oPiclist)
        for(let i = 0;i<oPic.length;i++){
            oPic[i].onmousedown = function(){
                //alert(i);
                for(let j = 0;j<oPic.length;j++){
                    oPic[j].className='clickstyle2';
                    oPiclist[j].className='clickstyle3';
                    //console.log(j);
                }
                oPic[i].className='onclickstyle2';
                oPiclist[i].className='onclickstyle3';
            }
            oPiclist[i].onmouseover = function(){
                //alert(i);
                for(let j = 0;j<oPic.length;j++){
                    oPic[j].className='clickstyle2';
                    oPiclist[j].className='clickstyle3';
                    //console.log(j);
                }
                oPic[i].className='onclickstyle2';
                oPiclist[i].className='onclickstyle3';
            }
        }
    })();
     /*  */   


        
   
    
    
}