window.onload=function(){
    /* 轮播 */
    var touch = document.getElementById('bg-lunbo');
    var oImg = document.getElementById('show');
    var oLi = document.getElementById('list').getElementsByTagName('li');
    var pic = ['20181020105240.jpg',
               '20181020105310.jpg',
               '20181020105341.jpg',
               '20181020105409.jpg',
               '20181020105504.jpg',
               '20181020105527.jpg',
               '20181020105545.jpg',
               '20181020105210.jpg'];
    var n = 0;
    function lunbo(){
        for(var i = 0;i<pic.length;i++){
            oLi[i].style.backgroundColor = 'rgb(190, 189, 189)';
        }
        oLi[n].style.backgroundColor = '#E0433A';
        oImg.src = "images/"+pic[n];
        n++;
        if(n==pic.length){n = 0} 
        console.log(n,pic[n]);
    }
    setInterval(lunbo,1000);
    /* 左右滑动效果 */
    
}