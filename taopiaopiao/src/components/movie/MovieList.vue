<template>
    <div class="movieList">
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <ul class="show">
            <li class="movie" @click="goDetail(movie.id)" v-for="movie in movieList" :key="movie.id">
                <div class="movie-img"><img :src="movie.img"/></div>   
                <div class="movie-info">
                    <p class="title">{{movie.nm}}</p>
                    <p class="brief">淘票票评分 <span>{{movie.sc}}</span></p>
                    <p class="brief">导演 : {{movie.dir}}</p>
                    <p class="brief">主演 : {{movie.star}}</p>
                </div>
                <div class="btn-wrap">
                    <div class="a1">
                        <div class="tpp-btn">购票</div>
                        <p>新人专享</p>
                    </div>
                </div>
            </li>
            <div class="loading" v-show="loadingShow">
                <img src="@/assets/img/loading.gif"/>
            </div>
            <div class="tip" v-show="tip">
                <p>我也是有底线的</p>
            </div>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios';
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
    components:{
        swipe: Swipe,
        "swipe-item": SwipeItem
    },
    data(){
        return{
            movieList:[],
            loadingShow:false,
            tip:false,
            
        }   
    },
    methods:{//创建方法
        loadDate(){
            // API 
            //let url = API_PROXY+'http;//api.douban.com/v2/movie/top250'
            // 本地 
            let url = "/static/data/moviedata.json"
            Axios.get(url).then( (res) =>{//es6处理数据
                let list = res.data.data.movies//获取API数据
                let data = list.slice(this.movieList.length, this.movieList.length + 5) 
                this.movieList = this.movieList.concat(data)
                if(data.length<5){//判断是否是最后一页
                    this.tip = true
                }
            }).catch(
                ()=>{
                    alert('数据接收失败!')
                }
            )    
        },
        goDetail(movieId){//创建方法
            this.$router.push("/movie/movieDetail/" +movieId)//添加路由 传参
        }
    },
    mounted () {//vue 实例挂载完成 
        this.loadDate();//调用数据
        window.onscroll=()=>{
            let clientHeight=document.documentElement.clientHeight;
            let scrollTop=document.documentElement.scrollTop;
            let scrollHeight=document.documentElement.scrollHeight;
            if(clientHeight+scrollTop==scrollHeight){
                this.loadingShow = true;
                if(!this.tip){//不是最后一页
                    this.loadingShow = true
                    this.loadDate()//继续调用
                }else{
                    this.loadingShow = false
                    this.tip = true
                }
            }
        }
    }
}
</script>
<style scoped>
.movieList{
    margin-top:50px;
}
.my-swipe {
  
  height: 150px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background: url('https://gw.alicdn.com/tfs/TB1TPmcocbpK1RjSZFyXXX_qFXa-1280-520.jpg_720x720Q30s100.jpg') no-repeat;
  color: #fff;
  background-size: 100%;
}
.slide2 {
  background: url('https://gw.alicdn.com/tfs/TB1bgadphjaK1RjSZFAXXbdLFXa-1280-520.jpg_720x720Q30s100.jpg') no-repeat;
  color: #000;
  background-size: 100%;
}
.slide3 {
  background: url('https://gw.alicdn.com/tfs/TB1wJMaowHqK1RjSZJnXXbNLpXa-1280-520.jpg_720x720Q30s100.jpg') no-repeat;
  color: #fff;
  background-size: 100%;
}
.show{margin:0 0 50px 0;}
.movie{display: flex;border-bottom: 1px solid rgb(238, 237, 237);padding: 10px 0;}
.movie-img{flex: 1.2;}
.movie-img img{padding: 5px 15px 5px 20px;}
.movie-info{width: 70%;flex: 3;padding-left:30px;width: 30%;}
.movie-info p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.title{font-weight: 600;font-size: 18px;}
.brief{color: #777;}
.brief span{color: #fea54c;font-weight: 600;}
/* 购票 */
.btn-wrap{width: 50px;margin: 0 20px;/* display: table; */display: flex;align-items: center;}
/*.a1{ display: table-cell;vertical-align: middle; }*/
.tpp-btn{width: 50px;height: 28px;background: #FF5772;border-radius: 14px;text-align: center;color: #fff;line-height: 28px;font-size: 12px;}
.btn-wrap p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color: #777;}
/*  */
.loading{text-align: center;}
.tip{text-align: center;color: #777;}
</style>
