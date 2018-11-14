<template>
    <div class="detail">
        <div class=top>
            <ul class="movieDatail">
                <li class="movieName">
                    {{movieDetail.nm}}
                </li>
                <li class="movieEnName">
                    <slot name="movieEnName"></slot>
                    
                </li>
                <li class="movieType">
                    {{movieDetail.cat}}
                </li>
                <li class="movieTime">
                    <slot name="movieTime"></slot>
                </li>
                <li class="movieUp">
                    <slot name="movieUp"></slot>
                </li>
            </ul>
            <div class="pic">
                <img :src="this.movieDetail.img"/>
            </div>
        </div>
         <div class="footer"> 
            <p>选座购票</p>
         </div>
    </div>
</template>

<script>
import Axios from "axios"
export default {
    data(){
        return{
            movieDetail:{},
        }
    },
    mounted(){
            //let url = API_PROXY+""
            let url = '/static/data/moviedata.json'
            let list = []
            Axios.get(url).then(res=>{
                let list = res.data.data.movies
                list.forEach(val => {
                    if(val.id==this.$route.params.movieId){ 
                        //console.log(val)
                        this.movieDetail.nm=val.nm
                        this.movieDetail.cat=val.cat   
                        this.movieDetail.img=val.img   
                    }
                    })
                        //console.log(this.movieDetail)
                        console.log(this.movieDetail)
                        //console.log(List)
            }).catch();   
    },
}
</script>


<style scoped>
.detail{width: 100%;height: 3rem;background: #DF7070;}
.top{padding-top: .5rem;display: flex;justify-content: space-around;}
.movieDatail{line-height: 0.3rem;color: #fff;width: 50%}
.movieName{font-size:20px;margin-top: 10px;}
.movieEnName{opacity: .7;margin:15px 0}
.movieType{opacity: .7;}
.movieTime{opacity: .7;}
.movieUp{opacity: .7;}
.pic{width: 28%;height: 2.5rem;background: cadetblue;}
.pic img{width: 100%;height: 100%;}


.footer{width: 100%;height: 55px;background: #DF7070;position: fixed;bottom: 0;}
p{text-align: center;color: #fff;font-size: 17px;line-height: 55px;}

</style>