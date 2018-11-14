<template>
    <div>
        <common-header></common-header>
        <router-view></router-view>
        <common-footer icon1='../../static/img/onmovie.png' icon2='../../static/img/mo.png' icon3='../../static/img/my.png'></common-footer>
    </div>
</template>
<script>
import commonHeader from "../common/Header"
import commonFooter from "../common/Footer"

export default {
    components:{
        commonHeader,
        commonFooter
    }
    
}
</script>
<style scoped>

</style>
