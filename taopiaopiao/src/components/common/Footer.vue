<template>
    <div class="footer">
        <div>
            <router-link to="/movie/movieList">
                <img :src="icon1"/>
                <p>热映</p>
            </router-link>
        </div>
        <div>
            <router-link to="/cinema">
                <img :src="icon2"/>
                <p>影院</p>
            </router-link>
        </div>
        <div>
            <router-link to="/mine">
                <img :src="icon3"/>
                <p>我的</p>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    props: ['icon1','icon2','icon3'],
}
</script>
<style scoped>
.footer{
    background: #fff;
    width: 100%;
    font-size: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    text-align: center;
}
.footer img{width: 20px; height: 20px;margin-top:5px;}
a{outline: none;color: #000;}
a.router-link-active{color: #FC6175;}

</style>
