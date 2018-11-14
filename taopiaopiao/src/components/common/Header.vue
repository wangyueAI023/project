<template>
    <div class="header">
        <div class="location">
            <div class="locationName">哈尔滨</div>
            <div class="arrow-down"></div>
        </div>
        <div class="movieState">
            <div class="now">正在热播</div>
            <div class="atOnce">即将上映</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header{
    background: #fff;
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    display: flex;
    justify-content:flex-start;
    line-height: 38px;
}
.location{display: flex;width: 42%;}
.locationName{
    font-weight: 700;
    padding-left: 50px;
    background: url(../../assets/img/logo.png);
    background-position: 20px 50%;
    background-size: 25px 25px;
    background-repeat: no-repeat;   
}
.arrow-down{
    width: 0;
	height: 0;
	border-width: 5px;
	border-style: solid;
	border-color: #333333 transparent transparent transparent;
    margin:17px 0 0 5px;
}
.movieState{
    color: #777;
    display: flex;
    font-weight: 500;
    display: flex;
    font-size: 16px;
}
.now{
    font-weight: 700;
    color: #FF4D64;
    border-bottom: 2px solid #FF4D64;
    margin: 0 1vmax;
}
.atOnce{margin: 0 4vmax }
</style>
