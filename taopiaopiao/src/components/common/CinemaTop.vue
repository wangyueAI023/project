<template>
    <div class="cinema">
        <div class="header">
            <div class="logo">
                <div class="location">
                    <p>哈尔滨</p>
                    <p class="icon"></p>
                </div>
            </div>
            <div class="right">
                <div class="list">
                    <div class="list1">  
                        <P>区域</P>
                        <div class="icon1"></div>
                    </div>
                   <div class="list2">  
                        <P>综合排序</P>
                        <div class="icon1"></div>
                    </div>
                    <div class="list3">  
                        <P>特色</P>
                        <div class="icon1"></div>
                    </div>
                </div>
                <div class="sea">
                    <img src="@/assets/img/sea.png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    
}
</script>
<style scoped>
.header{display: flex;height: 0.8rem; border-bottom: 1px solid #F6F6F6;}
.logo{
    display: flex;
    flex: 1;
    background: url(../../assets/img/logo.png) no-repeat;
    background-size: 23%;
    background-position: 5px 50%;
}
.location{display: flex;align-items: center;margin-left:0.7rem;color: #999;line-height: 0.8rem;}
.icon{
    width: 5px;
    height: 5px;
    border: 1px solid #999;
    transform: rotate(45deg);
    border-top:none;
    border-left:none;
    margin-left: 10px;
}
.right{display: flex;align-items: center;flex: 2;text-align: center;}
.right .list{display: flex;height: 0.5rem;flex: 3;font-size: 13px;}
.right .list1{
    display: flex;
    width: 32.5%;
    border-left: 1px solid #F6F6F6;
    justify-content: center;
    align-items: center;
   justify-content: center;
}
.right .list2{
    display: flex;
    width: 32.5%;
    border-left: 1px solid #F6F6F6;
    justify-content: center;
    align-items: center;
   justify-content: center;
}
.right .list3{
    display: flex;
    width: 32.5%;
    border-left: 1px solid #F6F6F6;
    border-right: 1px solid #F6F6F6;
    justify-content: center;
    align-items: center;
   justify-content: center;
}

.right .list P{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.icon1{
 width: 0;
 height: 0;
 border-width: 3px;
 border-style: solid;
 border-color: #000 transparent transparent transparent;
 margin-left: 0.1rem;
}
.right .sea{display: flex;justify-content: center;flex: 0.5}


</style>
